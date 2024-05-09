"use client"

import { FC, useEffect, useState } from "react"
import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductList.module.scss'
import { ListView } from "@/shared/data/view.data";
import { WrapperBlock } from "@/shared/ui/Wrapper/Title/Block/WrapperBlock";
import { IProduct, IProductProps } from "@/entities/Product/model/product.model";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { WrapperPagination } from "@/shared/ui/Wrapper/Pagination/ui/WrapperPagination";
import { NotFound } from "@/widgets/NotFound/NotFound";
import { ProductVertical } from "../../Item/Vertical/ProductVertical";
import { ProductView } from "@/entities/Product/data/product.data";
import { ProductAutoList } from "../Auto/ProductAutoList";

interface ProductListProps extends IProductProps{
    _products?: IProduct[]
    title?: string
    productView: ProductView
    listView?: ListView
    hasPagination?: boolean
    className?: string,
}

export const ProductList:FC<ProductListProps> = ({_products, title, productView, listView=ListView.Grid, hasPagination, className, page=1, ...rest}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(page)     
    const [countPages, setCountPages] = useState<number>(1)     
    const [products, setProducts] = useState<IProduct[]>([])     

    // API
    const {data: productQuery} = ProductAPI.useGetProductsQuery({...rest, page: pageNumber} as IProductProps)

    // EFFECT
    useEffect(() => {
        if (productQuery === undefined)
            return

        const limit = rest.limit ? rest.limit : 1
        const _countPages = -Math.floor(-(productQuery.count) / limit)
        setCountPages(_countPages === 0 ? 1 : _countPages)
    }, [productQuery])

    useEffect(() => {
        if (_products !== undefined)
            setProducts(_products)
        if (productQuery)
            setProducts(productQuery.results)
    }, [_products, productQuery])

    // HTML
    const html = (
        <div className={cls(cl.coreList, cl[listView], className)}>
            {products.length > 0 ? (
                <ProductAutoList products={products} productView={productView} view={listView} />
            ) : (
                <NotFound />
            )}
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
