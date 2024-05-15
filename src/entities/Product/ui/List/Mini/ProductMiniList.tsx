import { FC } from "react"

import { Query } from "@/shared/ui/Query/Query";
import { ListView } from "@/shared/data/view.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { ProductMini } from "../../Item/Mini/ProductMini";
import { cls } from "@/shared/lib/classes.lib";
import cl from './_ProductMiniList.module.scss'

interface ProductMiniListProps{
    products: IProduct[]
    addedProductIds?: number[]
    view?: ListView
    onClickItem?: Function
    className?: string,
}

export const ProductMiniList:FC<ProductMiniListProps> = ({products=[], addedProductIds=[], view=ListView.Column, onClickItem=()=>{}, className}) => {
    return (
        <Query listView={view} className={cls(cl.query, className)}>
            {products.map(product => (
                <ProductMini product={product} active={addedProductIds.includes(product.id)} 
                             onClick={() => onClickItem(product)} key={product.id} />
            ))}
        </Query>
    )
}
