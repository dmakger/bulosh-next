import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_LogoSmall.module.scss'
import { SITE_NAME } from "@/shared/data/seo.data";
import { LogoImage } from "../Image/LogoImage";

interface LogoSmallProps{
    className?: string,
}

export const LogoSmall:FC<LogoSmallProps> = ({className}) => {
    return (
        <div className={cls(cl.logo, className)}>
            <span className={cl.text}>{SITE_NAME}</span>
            <LogoImage className={cl.image}/>
        </div>
    )
}
