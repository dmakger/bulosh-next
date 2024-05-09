"use client"

import { FC, useEffect, useState } from "react"
import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductList.module.scss'
import { ListView } from "@/shared/data/view.data";
import { WrapperBlock } from "@/shared/ui/Wrapper/Title/Block/WrapperBlock";
import { IProduct, IProductProps } from "@/entities/Product/model/product.model";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { ProductItem } from "../Item/ProductItem";
import { WrapperPagination } from "@/shared/ui/Wrapper/Pagination/ui/WrapperPagination";

interface ProductListProps extends IProductProps{
    _products?: IProduct[]
    title?: string
    listView?: ListView
    hasPagination?: boolean
    className?: string,
}

export const ProductList:FC<ProductListProps> = ({_products, title, listView=ListView.Grid, hasPagination, className, page=1, ...rest}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(page)     
    const [countPages, setCountPages] = useState<number>(1) 

    // API
    const {data: productQuery} = ProductAPI.useGetProductsQuery({...rest, page: pageNumber} as IProductProps)

    // EFFECT
    useEffect(() => {
        if (productQuery === undefined)
            return

        const limit = rest.limit ? rest.limit : 1
        setCountPages(-Math.floor(-(productQuery.count) / limit))
    }, [productQuery])

    // HTML
    const html = (
        <div className={cls(cl.coreList, cl[listView], className)}>
            {productQuery && productQuery.results.map(it => (
                <ProductItem product={it} key={it.id} />
            ))}
        </div>
    )
    
    return (
        <WrapperBlock title={title}>
            {hasPagination ? (
                <WrapperPagination amount={countPages} active={pageNumber} set={setPageNumber}>
                    {html}
                </WrapperPagination>
            ) : (
                <> {html} </>
            )}
            
        </WrapperBlock>
    )
}
