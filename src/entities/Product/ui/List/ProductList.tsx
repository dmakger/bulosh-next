"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductList.module.scss'
import { IProduct, IProductProps } from "../../model/product.model";
import { ProductAPI } from "../../api/product.api";
import { ProductItem } from "../Item/ProductItem";

interface ProductListProps extends IProductProps{
    _products?: IProduct[]
    className?: string,
}

export const ProductList:FC<ProductListProps> = ({_products, className, ...rest}) => {
    // API
    const {data: products} = ProductAPI.useGetProductsQuery({...rest} as IProductProps)

    console.log('qwe', products);
    

    
    return (
        <div className={cls(className)}>
            {products && products.map(it => (
                <ProductItem product={it} key={it.id} />
            ))}
        </div>
    )
}
