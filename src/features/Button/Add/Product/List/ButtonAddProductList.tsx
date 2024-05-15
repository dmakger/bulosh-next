"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ButtonAddProductList.module.scss'
import { Button } from "@/shared/ui/Button/ui/Button";
import { ButtonView } from "@/shared/model/button.model";
import { IProduct } from "@/entities/Product/model/product.model";
import { CART_WHITE_PURPLE__ICON } from "@/shared/ui/Icon/data/cart.data.icon";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { useRouter } from "next/navigation";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";

interface ButtonAddProductListProps{
    products: IProduct[]
    className?: string,
}

export const ButtonAddProductList:FC<ButtonAddProductListProps> = ({products, className}) => {
    // ROUTER
    const router = useRouter()

    // API
    const [updateProduct] = ProductAPI.useUpdateProductMutation()

    // STATE
    const [amountSuccess, setAmountSuccess] = useState(0)
    
    const handleOnClick = () => {        
        products.map(async product => {
            const body = {
                product: product.id,
                count: product.countAdded ? product.countAdded+1 : 1,
            }
            await updateProduct(body).then(r => {
                setAmountSuccess(prevState => prevState+1)
            })
        })
    }

    useEffect(() => {
        if (products.length !== 0 && amountSuccess === products.length)
            router.push(DASHBOARD_PAGES.CART);
        }, [products, amountSuccess])
    
    return (
        <Button view={ButtonView.PrimaryToOutline} 
                title="Добавить в корзину" 
                afterImage={CART_WHITE_PURPLE__ICON} 
                onClick={handleOnClick} className={cls(cl.button, className)} />
    )
}
