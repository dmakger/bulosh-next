import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductMini.module.scss'
import { IProduct } from "../../../model/product.model";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { getProductUser } from "../../../lib/image.product.lib";


interface ProductMiniProps{
    product: IProduct
    active?: boolean
    onClick?: Function,
    className?: string,
}

export const ProductMini:FC<ProductMiniProps> = ({product, active=false, onClick=()=>{}, className}) => {
    return (
        <button className={cls(cl.product, active ? cl.active : '', className)} onClick={() => onClick()}>
            <div className={cl.left}>
                <div className={cl.wrapperImage}>
                    <ImageAPI src={getProductUser(product.image)} className={cl.image} />
                </div>
                <span className={cl.title}>{product.name}</span>
            </div>
            <span className={cl.right}>{product.price} ₽</span>
        </button>
    )
}
