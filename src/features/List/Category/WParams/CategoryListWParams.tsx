"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CategoryList.module.scss'
import { CategoryAPI } from "@/entities/Metric/api/category.metric.api";
import { IOption } from "@/shared/model/option.model";
import { categoriesToOptions, getParentCategoryOption } from "@/entities/Metric/lib/category/option.category.metric.lib";
import { List } from "@/shared/ui/List/List";
import { useRouter, useSearchParams } from "next/navigation";
import { CORE_PARAMS } from "@/config/params/core.params.config";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { getTreeOptionById } from "@/shared/lib/option.lib";

interface CategoryListWParamsProps{
    hasOutline?: boolean
    className?: string,
}

export const CategoryListWParams:FC<CategoryListWParamsProps> = ({hasOutline, className}) => {
    // ROUTER
    const searchParams = useSearchParams();
    const router = useRouter()

    // API
    const {data: categories} = CategoryAPI.useGetCategoriesQuery()

    // STATE
    const [options, setOptions] = useState<IOption[]>([])
    const [treeOptions, setTreeOptions] = useState<IOption[]>([])
    const [activeOption, setActiveOption] = useState<IOption>()

    // EFFECT
    useEffect(() => {
        setOptions(categoriesToOptions(categories))
    }, [categories])

    useEffect(() => {
        if (options.length === 0)
            return

        let categoryId = searchParams.get(CORE_PARAMS.CATEGORY)
        if (categoryId === null) {
            setTreeOptions([getParentCategoryOption(options)])
            return
        }
        setTreeOptions(() => {
            let updatedTree = getTreeOptionById(options,  +categoryId)
            if (updatedTree.length > 0 && updatedTree[updatedTree.length-1].options?.length === 0)
                updatedTree = [...updatedTree].slice(0, -1)
            return [getParentCategoryOption(options), ...updatedTree]
        })
    }, [options, searchParams])

    // HANDLE
    const handleOnClick = (option: IOption) => {
        const params = new URLSearchParams(searchParams.toString())
        if (option.id === -1) 
            params.delete(CORE_PARAMS.CATEGORY)
        else 
            params.set(CORE_PARAMS.CATEGORY, `${option.id}`)
        setActiveOption(option)
        router.push(`${MAIN_PAGES.CATALOG}?${params.toString()}`);    
    }    

    return (
        <List options={options} treeOptions={treeOptions} active={activeOption} 
                hasOutline={hasOutline} onClick={handleOnClick} 
                className={cls(className)} />
    )
}
