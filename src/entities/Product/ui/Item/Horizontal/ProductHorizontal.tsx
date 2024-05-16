"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductHorizontal.module.scss'
import { MAIN_PAGES } from "@/config/pages-url.config";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import Link from "next/link";
import { getProductUser } from "@/entities/Product/lib/image.product.lib";
import { Price } from "@/shared/ui/Price/Price";
import { ButtonAddProductWPlusMinus } from "@/features/Button/Add/Product/WPlusMinus/ButtonAddProductWPlusMinus";
import { IProductItemProps } from "@/entities/Product/model/props.product.model";
import { Button } from "@/shared/ui/Button/ui/Button";
import { TRASH__ICON } from "@/shared/ui/Icon/data/trash.data.icon";
import { ButtonView } from "@/shared/model/button.model";

interface ProductHorizontalProps extends IProductItemProps{
}

export const ProductHorizontal:FC<ProductHorizontalProps> = ({product, removeProduct, className}) => {
    // HANDLE
    const handleOnClickDelete = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (removeProduct)
            removeProduct(product)
    }

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
                    {removeProduct && 
                        <Button view={ButtonView.Empty} beforeImage={TRASH__ICON} onClick={handleOnClickDelete}/>
                    }
                </div>
            </div>
        </Link>
    )
}
