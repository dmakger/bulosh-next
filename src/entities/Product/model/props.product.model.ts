import { ListView } from "@/shared/data/view.data";
import { IProduct } from "./product.model";

export type TFuncRemoveProduct = (product: IProduct) => void

export interface IProductItemProps {
    product: IProduct
    removeProduct?: TFuncRemoveProduct

    className?: string,
}

export interface IProductListProps {
    products: IProduct[]
    view?: ListView
    removeProduct?: TFuncRemoveProduct

    className?: string,
}