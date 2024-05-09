import { FC } from "react"

import { Query } from "@/shared/ui/Query/Query";
import { ListView } from "@/shared/data/view.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { ProductMini } from "../../Item/Mini/ProductMini";

interface ProductMiniListProps{
    products: IProduct[]
    view?: ListView
    onClickItem?: Function
    className?: string,
}

export const ProductMiniList:FC<ProductMiniListProps> = ({products=[], view=ListView.Column, onClickItem, className}) => {
    return (
        <Query listView={view} className={className}>
            {products.map(product => (
                <ProductMini product={product} key={product.id} />
            ))}
        </Query>
    )
}
