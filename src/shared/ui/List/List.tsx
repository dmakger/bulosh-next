"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_List.module.scss'
import { IOption } from "@/shared/model/option.model";
import { Button } from "../Button/ui/Button";
import { ARROW_GRAY_PURPLE__ICON } from "../Icon/data/arrow.data.icon";
import { Axis } from "../Icon/model/model";
import { ButtonView } from "@/shared/model/button.model";
import { getParentCategoryOption } from "@/entities/Metric/lib/category/option.category.metric.lib";

interface ListProps {
    options: IOption[]
    className?: string,
}

export const List:FC<ListProps> = ({options, className}) => {    
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
        <div className={cls(cl.options, className)}>
            {tree.length > 1 &&
                <Button title={tree[tree.length-1].name} 
                        view={ButtonView.PrimaryToOutline}
                        beforeImage={ARROW_GRAY_PURPLE__ICON}
                        beforeProps={{axis: Axis.Left}} 
                        onClick={handleOnClickBack} />
            }
            {tree[tree.length-1].options && tree[tree.length-1].options!.map(option => (
                <Button title={option.name} 
                        arrow={option.options!.length > 0 ? ARROW_GRAY_PURPLE__ICON : undefined} 
                        arrowAxis={Axis.Right} 
                        onClick={() => handleOnClick(option)}
                        key={option.id} />
            ))}
        </div>
    )
}
