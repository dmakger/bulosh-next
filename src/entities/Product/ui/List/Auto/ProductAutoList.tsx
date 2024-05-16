import { FC } from "react"

import { ProductView } from "@/entities/Product/data/product.data";
import { ProductHorizontalList } from "../Horizontal/ProductHorizontalList";
import { IProduct } from "@/entities/Product/model/product.model";
import { ListView } from "@/shared/data/view.data";
import { ProductVerticalList } from "../Vertical/ProductVerticalList";
import { ProductMiniList } from "../Mini/ProductMiniList";
import { IProductListProps } from "@/entities/Product/model/props.product.model";

interface ProductAutoListProps extends IProductListProps {
    productView: ProductView,
}

export const ProductAutoList:FC<ProductAutoListProps> = ({productView, ...rest}) => {
    if (productView === ProductView.Horizontal)
        return <ProductHorizontalList {...rest} />
    if (productView === ProductView.Vertical)
        return <ProductVerticalList {...rest} />
    if (productView === ProductView.Mini)
        return <ProductMiniList {...rest} />
    
    return <></>
}
