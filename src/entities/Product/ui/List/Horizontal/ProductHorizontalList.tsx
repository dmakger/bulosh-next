import { FC } from "react"

import { Query } from "@/shared/ui/Query/Query";
import { ListView } from "@/shared/data/view.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { ProductHorizontal } from "../../Item/Horizontal/ProductHorizontal";

interface ProductHorizontalListProps{
    products: IProduct[]
    view?: ListView
    className?: string,
}

export const ProductHorizontalList:FC<ProductHorizontalListProps> = ({products=[], view=ListView.Column, className}) => {
    return (
        <Query listView={view} className={className}>
            {products.map(product => (
                <ProductHorizontal product={product} key={product.id} />
            ))}
        </Query>
    )
}
