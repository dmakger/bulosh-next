"use client"

import { FC } from "react"
import { AdAPI } from "@/entities/Ad/api/ad.api";
import { Poster } from "../this/Poster";

interface PosterAPIProps{
    className?: string,
}

export const PosterAPI:FC<PosterAPIProps> = ({...rest}) => {
    // API
    const {data: posters} = AdAPI.useGetPostersQuery()

    // HTML
    if (posters === undefined)
        return

    return (
        <Poster poster={posters[0]} {...rest}/>
    )
}
