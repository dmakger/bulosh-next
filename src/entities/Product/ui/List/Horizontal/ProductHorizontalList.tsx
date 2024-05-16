import { FC } from "react"

import { Query } from "@/shared/ui/Query/Query";
import { ListView } from "@/shared/data/view.data";
import { ProductHorizontal } from "../../Item/Horizontal/ProductHorizontal";
import { IProductListProps, TFuncRemoveProduct } from "@/entities/Product/model/props.product.model";

interface ProductHorizontalListProps extends IProductListProps {}

export const ProductHorizontalList:FC<ProductHorizontalListProps> = ({products=[], view=ListView.Column, removeProduct, className}) => {
    return (
        <Query listView={view} className={className}>
            {products.map(product => (
                <ProductHorizontal product={product} removeProduct={removeProduct} key={product.id} />
            ))}
        </Query>
    )
}
