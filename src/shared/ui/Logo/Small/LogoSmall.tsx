import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_LogoSmall.module.scss'
import { SITE_NAME } from "@/shared/data/seo.data";
import { LogoImage } from "../Image/LogoImage";
import Link from "next/link";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface LogoSmallProps {
    isLink?: boolean
    className?: string,
}

export const LogoSmall:FC<LogoSmallProps> = ({isLink=false, className}) => {
    const html = (
        <div className={cls(cl.logo, className)}>
            <span className={cl.text}>{SITE_NAME}</span>
            <LogoImage className={cl.image}/>
        </div>
    )
    
    if (!isLink)
        return html
    return (
        <Link href={MAIN_PAGES.HOME}>{html}</Link>
    )
}
