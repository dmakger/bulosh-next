import { IAmountUnit } from "@/entities/Metric/model/amountUnit.metric.model"
import { ICategory } from "@/entities/Metric/model/category.metric.model"
import { IQuery } from "@/shared/model/query.model"

export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    image?: string | null
    category: ICategory
    amount: number
    amountUnit: IAmountUnit
    countAdded?: number
    createdAt: string
    deletedAt?: string | null
}


export interface IProductProps {
    limit?: number
    page?: number
    ordering?: string
    category_id?: number
    q?: string
    popularity?: boolean
    only_added?: boolean
}


export interface IProductQuery extends IQuery {
    results: IProduct[]
}