import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductHorizontal.module.scss'
import { IProduct } from "@/entities/Product/model/product.model";

interface ProductHorizontalProps {
    product: IProduct
    className?: string,
}

export const ProductHorizontal:FC<ProductHorizontalProps> = ({product, className}) => {
    return (
        <div className={cls(className)}>

        </div>
    )
}
