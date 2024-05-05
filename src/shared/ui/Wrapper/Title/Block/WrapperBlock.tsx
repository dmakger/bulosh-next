import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperBlock.module.scss'

interface WrapperBlockProps{
    title?: string
    className?: string,
    children: ReactNode
}

export const WrapperBlock:FC<WrapperBlockProps> = ({title, className, children}) => {
    if (title === undefined)
        return children
    
    return (
        <div className={cls(cl.wrapper, className)}>
            <h2 className={cl.title}>{title}</h2>
            {children}
        </div>
    )
}
