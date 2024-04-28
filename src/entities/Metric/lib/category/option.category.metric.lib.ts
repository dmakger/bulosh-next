import { IOption } from "@/shared/model/option.model";
import { ICategory } from "../../model/category.metric.model";


// ===={ TO OPTION }====

export const categoriesToOptions = (categories?: ICategory[]): IOption[] => {
    if (!categories) 
        return []
    return categories.map(it => categoryToOption(it))
}

export const categoryToOption = (category: ICategory): IOption => {
    return {
        id: category.id, 
        name: category.name,
        options: categoriesToOptions(category.children),
    } as IOption
}


// ===={ PARENT OPTION }====
export const getParentCategoryOption = (options: IOption[]): IOption => {
    return {id: -1, name: 'Категории', options: options ? options : []}
}