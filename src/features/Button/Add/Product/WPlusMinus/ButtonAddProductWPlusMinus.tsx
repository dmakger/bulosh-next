"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ButtonAddProductWPlusMinus.module.scss'
import { IProduct } from "@/entities/Product/model/product.model";
import { ImageSmart } from "@/shared/ui/Image/Smart/ImageSmart";
import { ADD_PURPLE_WHITE__ICON, ADD__ICON } from "@/shared/ui/Icon/data/add.data.icon";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { Button } from "@/shared/ui/Button/ui/Button";
import { POP_PURPLE_WHITE__ICON } from "@/shared/ui/Icon/data/pop.data.icon";
import { ButtonView } from "@/shared/model/button.model";

interface ButtonAddProductWPlusMinusProps{
    product: IProduct,
    className?: string,
}

export const ButtonAddProductWPlusMinus:FC<ButtonAddProductWPlusMinusProps> = ({product, className}) => {    
    // STATE
    const [countAdded, setCountAdded] = useState(0)

    // API
    const [updateProduct] = ProductAPI.useUpdateProductMutation()

    // EFFECT
    useEffect(() => {
        if (product.countAdded === undefined || product.countAdded === countAdded)
            return
        setCountAdded(product.countAdded)
    }, [product])

    // HANDLE
    const handleOnClickAdd = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        handleOnClick({
            product: product.id,
            count: countAdded+1,
        }, countAdded)
    }
    const handleOnClickPop = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        handleOnClick({
            product: product.id,
            count: countAdded <= 0 ? 0 : countAdded-1,
        }, countAdded)
    }

    const handleOnClick = async (body: {product: number, count: number}, prevCount: number) => {
        setCountAdded(body.count)        
        await updateProduct(body).catch(e => {
            setCountAdded(prevCount)
        })
    }
    
    return (
        <div className={cls(cl.block, className)}>
            <Button beforeImage={POP_PURPLE_WHITE__ICON} view={ButtonView.Empty} onClick={handleOnClickPop} className={cl.button} />
            <div className={cl.content}>{countAdded}</div>
            <Button beforeImage={ADD_PURPLE_WHITE__ICON} view={ButtonView.Empty} onClick={handleOnClickAdd} className={cl.button} />
        </div>
    )
}
