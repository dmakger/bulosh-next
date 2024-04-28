import { ReactNode } from 'react'
import cl from './_Wrapper1280.module.scss'
import { cls } from '@/shared/lib/classes.lib'

interface Wrapper1280Props {
    children?: ReactNode
    className?: string
    classNameContent?: string
}

export default function Wrapper1280({children, className, classNameContent}: Wrapper1280Props) {
    return (
        <div className={cls(cl.wrapper, className)}>
            <div className={cls(cl.content, classNameContent)}>
                {children}
            </div>
        </div>
    )
}
