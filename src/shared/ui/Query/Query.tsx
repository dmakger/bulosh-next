import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Query.module.scss'
import { ListView } from "@/shared/data/view.data";

interface QueryProps{
    listView: ListView
    className?: string,
    children: ReactNode
}

export const Query:FC<QueryProps> = ({listView, className, children}) => {
    return (
        <div className={cls(cl[listView], className)}>
            {children}
        </div>
    )
}
