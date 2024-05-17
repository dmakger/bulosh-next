"use client"

import { FC } from "react"

import { ProductList } from "@/entities/Product/ui/List/Smart/ProductList";
import { PRODUCT_LIMIT, ProductView } from "@/entities/Product/data/product.data";
import { ListView } from "@/shared/data/view.data";
import { IProduct } from "@/entities/Product/model/product.model";

interface ProductListCartProps{
    outProducts?: IProduct[]
    setOutProducts?: Function
    className?: string,
}

export const ProductListCart:FC<ProductListCartProps> = ({outProducts=[], setOutProducts, className}) => {

    return (
        <ProductList limit={PRODUCT_LIMIT} title={"Корзина"}
                     _products={outProducts}
                     listView={ListView.Column} productView={ProductView.Horizontal}
                     hasPagination={true} only_added={true}
                     setOutProducts={setOutProducts} className={className} />
    )
}
