import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Poster.module.scss'
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { IPoster } from "../../../../model/poster.ad.model";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { Button } from "@/shared/ui/Button/ui/Button";

interface PosterProps{
    poster: IPoster
    className?: string,
}

export const Poster:FC<PosterProps> = ({poster, className}) => {
    return (
        <Wrapper1280 classNameContent={cls(cl.block, className)}>
            <div className={cl.content}>
                <h2 className={cl.name}>{poster.name}</h2>
                <span className={cl.description}>{poster.description}</span>
                <div className={cl.bottom}>
                    <Button href={poster.link} title={"Подробнее"} />
                </div>
            </div>
            <ImageAPI src={poster.wallpaper} className={cl.wallpaper}/>
        </Wrapper1280>
    )
}
