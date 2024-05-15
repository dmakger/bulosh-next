"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductHorizontal.module.scss'
import { IProduct } from "@/entities/Product/model/product.model";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import Link from "next/link";
import { getProductUser } from "@/entities/Product/lib/image.product.lib";
import { Price } from "@/shared/ui/Price/Price";
import { ButtonAddProduct } from "@/features/Button/Add/Product/Simple/ButtonAddProduct";
import { ButtonAddProductWPlusMinus } from "@/features/Button/Add/Product/WPlusMinus/ButtonAddProductWPlusMinus";

interface ProductHorizontalProps {
    product: IProduct
    className?: string,
}

export const ProductHorizontal:FC<ProductHorizontalProps> = ({product, className}) => {
    // STATE
    const [isDeleted, setIsDeleted] = useState(false)

    return (
        <Link href={MAIN_PAGES.PRODUCT(product.id)}  className={cls(cl.product, className)}>
            <div className={cl.wrapperImage}>
                <ImageAPI src={getProductUser(product.image)} className={cl.image} />
            </div>
            <div className={cl.main}>
                <div className={cl.top}>
                    <div className={cl.mainInfo}>
                        <div className={cl.titleInfo}>
                            <h3 className={cl.name}>{product.name}</h3>
                            <p className={cl.hint}>{product.amount} {product.amountUnit.shortname}</p>
                        </div>
                        <Price price={product.price} className={cl.price} />
                    </div>
                    <span className={cl.description}>{product.description}</span>
                </div>
                <div className={cl.bottom}>
                    <ButtonAddProductWPlusMinus product={product} />
                </div>
            </div>
        </Link>
    )
}
