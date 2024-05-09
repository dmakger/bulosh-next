"use client"

import { FC } from "react"

import { ProductListWParams } from "../WParams/ProductListWParams";
import cl from './_ProductListWCategory.module.scss'
import { cls } from "@/shared/lib/classes.lib";
import { CategoryListWParams } from "../../Category/WParams/CategoryListWParams";

interface ProductListWCategoryProps{
    className?: string,
}

export const ProductListWCategory:FC<ProductListWCategoryProps> = ({className}) => {
    return (
        <div className={cls(cl.wrapper, className)}>
            <div className={cl.left}>
                <div className={cl.content}>
                    <CategoryListWParams />
                </div>
            </div>
            <ProductListWParams/>
        </div>
    )
}
