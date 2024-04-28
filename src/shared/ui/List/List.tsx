"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_List.module.scss'
import { IOption } from "@/shared/model/option.model";
import { Button } from "../Button/ui/Button";
import { ARROW_BLACK_PURPLE__ICON, ARROW_GRAY_PURPLE__ICON } from "../Icon/data/arrow.data.icon";
import { Axis } from "../Icon/model/model";
import { ButtonView } from "@/shared/model/button.model";
import { getParentCategoryOption } from "@/entities/Metric/lib/category/option.category.metric.lib";

interface ListProps {
    options: IOption[]
    hasOutline?: boolean
    className?: string,
}

export const List:FC<ListProps> = ({options, hasOutline=false, className}) => {    
    // STATE
    const [tree, setTree] = useState<IOption[]>([getParentCategoryOption(options)])

    // EFFECT
    useEffect(() => {
        setTree([getParentCategoryOption(options)])
    }, [options])
    
    // HANDLE
    const handleOnClick = (option: IOption) => {
        setTree(prevState => {
            if (option.options && option.options.length > 0)
                return [...prevState, option]
            return [...prevState]
        })
    }

    const handleOnClickBack = () => {
        if (tree.length <= 1)
            return

        setTree(prevState => {
            return [...prevState].slice(0, -1)
        })
    }    
    
    return (
        <div className={cls(cl.block, hasOutline ? cl.outline : "", className)}>
            <Button title={tree[tree.length-1].name} 
                    view={ButtonView.BlackTToPurpleT}
                    beforeImage={tree.length > 1 ? ARROW_BLACK_PURPLE__ICON : undefined}
                    beforeProps={{axis: Axis.Left, width: 12, height: 12}} 
                    onClick={handleOnClickBack} className={cl.back} />

            <div className={cl.content}>
                {tree[tree.length-1].options && tree[tree.length-1].options!.map(option => (
                    <Button title={option.name} 
                            arrow={option.options!.length > 0 ? ARROW_GRAY_PURPLE__ICON : undefined} 
                            arrowAxis={Axis.Right} 
                            onClick={() => handleOnClick(option)} 
                            className={cl.item}
                            key={option.id} />
                ))}
            </div>
        </div>
    )
}
