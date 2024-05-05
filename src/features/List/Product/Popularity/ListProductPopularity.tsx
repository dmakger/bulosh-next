import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ListProductPopularity.module.scss'
import { ListView } from "@/shared/data/view.data";
import { ProductList } from "@/entities/Product/ui/List/ProductList";

interface ListProductPopularityProps{
    className?: string,
}

export const ListProductPopularity:FC<ListProductPopularityProps> = ({className}) => {
    return (
        <ProductList title={"Хит продаж"} popularity={true} listView={ListView.List}/>
    )
}
