import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductItem.module.scss'
import { IProduct } from "../../model/product.model";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { getProductUser } from "../../lib/image.product.lib";
import { Price } from "@/shared/ui/Price/Price";
import { ButtonAddProduct } from "@/features/Button/Add/Product/ButtonAddProduct";

interface ProductItemProps{
    product: IProduct
    className?: string,
}

export const ProductItem:FC<ProductItemProps> = ({product, className}) => {
    return (
        <div className={cls(cl.product, className)}>
            <ImageAPI src={getProductUser(product.image)} className={cl.image} />
            <div className={cl.main}>
                <div className={cl.text}>
                    <h3 className={cl.name}>{product.name}</h3>
                    <p className={cl.hint}>{product.amount} {product.amountUnit.shortname}</p>
                </div>
                <div className={cl.bottom}>
                    <Price price={product.price} />
                    <ButtonAddProduct product={product} />
                </div>
            </div>
        </div>
    )
}
