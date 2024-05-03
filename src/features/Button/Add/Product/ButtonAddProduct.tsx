"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ButtonAddProduct.module.scss'
import { IProduct } from "@/entities/Product/model/product.model";
import { ImageSmart } from "@/shared/ui/Image/Smart/ImageSmart";
import { ADD__ICON } from "@/shared/ui/Icon/data/add.data.icon";
import { ProductAPI } from "@/entities/Product/api/product.api";

interface ButtonAddProductProps{
    product: IProduct,
    className?: string,
}

export const ButtonAddProduct:FC<ButtonAddProductProps> = ({product, className}) => {
    console.log('asd', product);
    
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
    const handleOnClick = async () => {
        const prevCountAdded = countAdded
        const body = {
            product: product.id,
            count: prevCountAdded > 0 ? 0 : prevCountAdded+1,
        }
        setCountAdded(body.count)
        console.log('asd 2', body.count);
        

        await updateProduct(body).catch(e => {
            setCountAdded(prevCountAdded)
        })
    }
    
    return (
        <button onClick={handleOnClick}>
            <ImageSmart isActive={countAdded > 0} icon={ADD__ICON} />
        </button>
    )
}
