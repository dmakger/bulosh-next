import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_NotFound.module.scss'

interface NotFoundProps{
    className?: string,
}

export const NotFound:FC<NotFoundProps> = ({className}) => {
    const text = "К сожалению тут пусто :("
    
    return (
        <div className={cls(cl.block, className)}>
            <h2 className={cl.text}>
                {text}
            </h2>
        </div>
    )
}
