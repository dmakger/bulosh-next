import { FC } from "react"

import { Query } from "@/shared/ui/Query/Query";
import { ListView } from "@/shared/data/view.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { ProductVertical } from "../../Item/Vertical/ProductVertical";

interface ProductVerticalListProps{
    products: IProduct[]
    view?: ListView
    className?: string,
}

export const ProductVerticalList:FC<ProductVerticalListProps> = ({products=[], view=ListView.List, className}) => {
    return (
        <Query listView={view} className={className}>
            {products.map(product => (
                <ProductVertical product={product} key={product.id} />
            ))}
        </Query>
    )
}
