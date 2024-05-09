import { IProductProps } from "../model/product.model";

export const getProductProps = (props: IProductProps) => {
    return Object.keys(props).map(key => {
        let value = props[key as keyof IProductProps];
        if (value === undefined)
            return ''
        return `${key}=${value}`
    }).join('&')
}