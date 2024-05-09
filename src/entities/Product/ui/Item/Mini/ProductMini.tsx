import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductMini.module.scss'
import { IProduct } from "../../../model/product.model";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { getProductUser } from "../../../lib/image.product.lib";


interface ProductMiniProps{
    product: IProduct
    active?: boolean
    className?: string,
}

export const ProductMini:FC<ProductMiniProps> = ({product, active=false, className}) => {
    return (
        <div className={cls(cl.product, active ? cl.active : '', className)}>
            <div className={cl.left}>
                <div className={cl.wrapperImage}>
                    <ImageAPI src={getProductUser(product.image)} className={cl.image} />
                </div>
                <span className={cl.title}>{product.name}</span>
            </div>
            <span className={cl.right}>{product.price} ₽</span>
        </div>
    )
}
