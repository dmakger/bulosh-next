"use client"

import { FC, useEffect, useState } from "react"

import {isEqual} from "lodash";
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
    treeOptions?: IOption[]
    active?: IOption
    onClick?: Function
    hasOutline?: boolean
    className?: string,
}

export const List:FC<ListProps> = ({options, treeOptions=[], active, hasOutline=false, onClick=()=>{}, className}) => {    
    // STATE
    const [tree, setTree] = useState<IOption[]>([getParentCategoryOption(options)])

    // EFFECT
    useEffect(() => {
        setTree([getParentCategoryOption(options)])
    }, [options])
    useEffect(() => {
        if (treeOptions.length === 0 || isEqual(treeOptions, tree))
            return
        setTree(treeOptions)
    }, [treeOptions])
    
    // HANDLE
    const handleOnClick = (option: IOption) => {
        setTree(prevState => {
            if (option.options && option.options.length > 0)
                return [...prevState, option]
            return [...prevState]
        })
        onClick(option)
    }

    const handleOnClickBack = () => {
        if (tree.length <= 1)
            return

        setTree(prevState => {
            const newState = [...prevState].slice(0, -1)            
            onClick(newState.at(newState.length-1))
            return newState
        })
    }    
    
    return (
        <div className={cls(cl.block, hasOutline ? cl.outline : "", className)}>
            {tree.length === 0 ? (
                <></>
            ) : (
                <>
                    <Button title={tree[tree.length-1].name} 
                            view={ButtonView.BlackTToPurpleT}
                            beforeImage={tree.length > 1 ? ARROW_BLACK_PURPLE__ICON : undefined}
                            beforeProps={{axis: Axis.Left, width: 12, height: 12}} 
                            onClick={handleOnClickBack} className={cls(cl.back, active?.id === tree[tree.length-1].id ? cl.activeTitle : '')} />
                    <div className={cl.content}>
                        {tree[tree.length-1].options && tree[tree.length-1].options!.map(option => (
                            <Button title={option.name} 
                                    arrow={option.options!.length > 0 ? ARROW_GRAY_PURPLE__ICON : undefined} 
                                    arrowAxis={Axis.Right} 
                                    onClick={() => handleOnClick(option)} 
                                    className={cls(cl.item, active?.id === option.id ? cl.active : '')}
                                    key={option.id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
