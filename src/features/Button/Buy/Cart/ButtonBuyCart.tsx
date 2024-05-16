"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ButtonBuyCart.module.scss'
import { ProductAPI } from "@/entities/Product/api/product.api";
import { ButtonView } from "@/shared/model/button.model";
import { Button } from "@/shared/ui/Button/ui/Button";
import { IProduct } from "@/entities/Product/model/product.model";

interface ButtonBuyCartProps{
    productList: IProduct[] 
    setOutProducts?: Function
    className?: string,
}

export const ButtonBuyCart:FC<ButtonBuyCartProps> = ({productList, setOutProducts, className}) => {    
    // API
    const [buyCart] = ProductAPI.useBuyCartMutation()
    
    const handleOnClick = async () => {
        const productIds = productList.map(it => it.id)      
        await buyCart(productIds).then(r => {
            if (setOutProducts)
                setOutProducts([])
            window.location.reload();
        })
    }
    
    return (
        <Button view={ButtonView.PrimaryToOutline} 
                title="Оформить продукты" 
                onClick={handleOnClick} className={cls(cl.button, className)} />
    )
}
