import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductVertical.module.scss'
import { IProduct } from "../../../model/product.model";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { getProductUser } from "../../../lib/image.product.lib";
import { Price } from "@/shared/ui/Price/Price";
import { ButtonAddProduct } from "@/features/Button/Add/Product/ButtonAddProduct";
import Link from "next/link";
import { MAIN_PAGES } from "@/config/pages-url.config";


interface ProductVerticalProps{
    product: IProduct
    className?: string,
}

export const ProductVertical:FC<ProductVerticalProps> = ({product, className}) => {
    return (
        <Link href={MAIN_PAGES.PRODUCT(product.id)}  className={cls(cl.product, className)}>
            <div className={cl.wrapperImage}>
                <ImageAPI src={getProductUser(product.image)} className={cl.image} />
            </div>
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
        </Link>
    )
}
