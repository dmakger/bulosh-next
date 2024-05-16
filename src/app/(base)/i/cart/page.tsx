"use client"

import { IProduct } from "@/entities/Product/model/product.model";
import { ButtonBuyCart } from "@/features/Button/Buy/Cart/ButtonBuyCart";
import { ProductListCart } from "@/features/List/Product/Cart/ProductListCart";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { useState } from "react";
import cl from './_CartPage.module.scss'

export default function CartPage() {
    // STATE
    const [productList, setProductList] = useState<IProduct[]>([])

    return (
        <Wrapper1280 classNameContent={cl.content}>
            <ProductListCart setOutProducts={setProductList} outProducts={productList}/>
            <ButtonBuyCart productList={productList} setOutProducts={setProductList} className={cl.button}/>
        </Wrapper1280>
    )
}
