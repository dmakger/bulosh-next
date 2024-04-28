"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CategoryList.module.scss'
import { CategoryAPI } from "@/entities/Metric/api/category.metric.api";
import { IOption } from "@/shared/model/option.model";
import { categoriesToOptions } from "@/entities/Metric/lib/category/option.category.metric.lib";
import { List } from "@/shared/ui/List/List";

interface CategoryListProps{
    hasOutline?: boolean
    className?: string,
}

export const CategoryList:FC<CategoryListProps> = ({hasOutline, className}) => {
    // API
    const {data: categories} = CategoryAPI.useGetCategoriesQuery()

    // STATE
    const [options, setOptions] = useState<IOption[]>([])

    // EFFECT
    useEffect(() => {
        setOptions(categoriesToOptions(categories))
    }, [categories])

    return (
        <List options={options} hasOutline={hasOutline} className={cls(className)} />
    )
}
