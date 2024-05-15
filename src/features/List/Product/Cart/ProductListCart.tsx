import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductListCart.module.scss'
import { ProductList } from "@/entities/Product/ui/List/Smart/ProductList";
import { PRODUCT_LIMIT, ProductView } from "@/entities/Product/data/product.data";
import { ListView } from "@/shared/data/view.data";

interface ProductListCartProps{
    className?: string,
}

export const ProductListCart:FC<ProductListCartProps> = ({className}) => {
    return (
        <ProductList limit={PRODUCT_LIMIT} 
                     listView={ListView.Column} productView={ProductView.Horizontal}
                     hasPagination={true} only_added={true}
                     className={className} />
    )
}
