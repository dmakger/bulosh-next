import { IAmountUnit } from "@/entities/Metric/model/amount.metric.model"
import { ICategory } from "@/entities/Metric/model/category.metric.model"

export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    image?: string
    category: ICategory
    amount: number
    amount_unit: IAmountUnit
    created_at: string
    deleted_at?: string
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
