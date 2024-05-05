"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductList.module.scss'
import { IProduct, IProductProps } from "../../model/product.model";
import { ProductAPI } from "../../api/product.api";
import { ProductItem } from "../Item/ProductItem";
import { ListView } from "@/shared/data/view.data";

interface ProductListProps extends IProductProps{
    _products?: IProduct[]
    listView?: ListView
    className?: string,
}

export const ProductList:FC<ProductListProps> = ({_products, listView=ListView.Grid, className, ...rest}) => {
    // API
    const {data: products} = ProductAPI.useGetProductsQuery({...rest} as IProductProps)

    return (
        <div className={cls(cl.list, cl[listView], className)}>
            {products && products.map(it => (
                <ProductItem product={it} key={it.id} />
            ))}
        </div>
    )
}
