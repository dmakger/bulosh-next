import { FC } from "react"

import { ListView } from "@/shared/data/view.data";
import { ProductList } from "@/entities/Product/ui/List/Smart/ProductList";
import { IProductProps } from "@/entities/Product/model/product.model";
import { PRODUCT_LIMIT, ProductView } from "@/entities/Product/data/product.data";

interface ListProductPopularityProps {
    limit?: IProductProps['limit']
    className?: string,
}

export const ListProductPopularity:FC<ListProductPopularityProps> = ({limit=PRODUCT_LIMIT, className}) => {
    return (
        <ProductList title={"Хит продаж"} popularity={true} listView={ListView.List} productView={ProductView.Vertical} limit={limit} className={className} />
    )
}
