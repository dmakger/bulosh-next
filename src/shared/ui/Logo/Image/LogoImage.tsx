import { FC } from "react"
import Image from 'next/image'

import { cls } from '@/shared/lib/classes.lib';
// import cl from './_LogoImage.module.scss'

import LogoPNG from '@/shared/assets/logo.png'

interface LogoImageProps{
    className?: string,
}

export const LogoImage:FC<LogoImageProps> = ({className}) => {
    return (
        <Image src={LogoPNG} alt={"logo"} className={cls(className)}/>
    )
}
