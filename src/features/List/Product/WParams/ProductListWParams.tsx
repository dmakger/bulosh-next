"use client"

import { FC } from "react"

import { useSearchParams } from "next/navigation";
import { paramsToBack } from "@/config/params/backend.params.config";
import { ProductList } from "../../../../entities/Product/ui/List/ProductList";
import { PRODUCT_LIMIT } from "@/entities/Product/data/product.data";
import { ListView } from "@/shared/data/view.data";

interface ProductListWParamsProps{
    className?: string,
}

export const ProductListWParams:FC<ProductListWParamsProps> = ({className}) => {
    // ROUTER
    const searchParams = useSearchParams();
    const newParams = paramsToBack(searchParams)        

    return (
        <ProductList limit={PRODUCT_LIMIT} listView={ListView.Grid} hasPagination={true} className={className} {...newParams} />
    )
}
