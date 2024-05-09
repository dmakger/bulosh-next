import { FC } from "react"

import { ProductView } from "@/entities/Product/data/product.data";
import { ProductHorizontalList } from "../Horizontal/ProductHorizontalList";
import { IProduct } from "@/entities/Product/model/product.model";
import { ListView } from "@/shared/data/view.data";
import { ProductVerticalList } from "../Vertical/ProductVerticalList";
import { ProductMiniList } from "../Mini/ProductMiniList";

interface ProductAutoListProps{
    products: IProduct[],
    productView: ProductView,
    view?: ListView
    className?: string,
}

export const ProductAutoList:FC<ProductAutoListProps> = ({products, productView, view, className}) => {
    const props = {products, view, className}

    if (productView === ProductView.Horizontal)
        return <ProductHorizontalList {...props} />
    if (productView === ProductView.Vertical)
        return <ProductVerticalList {...props} />
    if (productView === ProductView.Mini)
        return <ProductMiniList {...props} />
    
    return <></>
}
