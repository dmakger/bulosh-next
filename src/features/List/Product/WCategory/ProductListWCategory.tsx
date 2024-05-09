"use client"

import { FC } from "react"

import { useSearchParams } from "next/navigation";
import { paramsToBack } from "@/config/params/backend.params.config";
import { ProductListWParams } from "../WParams/ProductListWParams";
import cl from './_ProductListWCategory.module.scss'
import { CategoryList } from "../../Category/CategoryList";
import { cls } from "@/shared/lib/classes.lib";

interface ProductListWCategoryProps{
    className?: string,
}

export const ProductListWCategory:FC<ProductListWCategoryProps> = ({className}) => {
    // ROUTER
    const searchParams = useSearchParams();

    return (
        <div className={cls(cl.wrapper, className)}>
            <div className={cl.left}>
                <CategoryList />
            </div>
            <ProductListWParams/>
        </div>
    )
}
