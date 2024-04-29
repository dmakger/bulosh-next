"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_UserImage.module.scss'
import { IUser } from "../../model/user.model";
import { getImageUser } from "../../lib/image.user.lib";
import { UserAPI } from "../../api/user.api";

interface UserImageProps{
    image?: string
    user?: IUser
    isAuthUser?: boolean
    className?: string,
}

export const UserImage:FC<UserImageProps> = ({image, user, isAuthUser=false, className}) => {
    // STATE
    const [currentImage, setCurrentImage] = useState<string>()

    // API
    const {data: authUser} = UserAPI.useGetAuthUserQuery()

    // EFFECT
    useEffect(() => {
        if (isAuthUser)
            setCurrentImage(authUser?.image)
        else if (image)
            setCurrentImage(image)
        else if (user)
            setCurrentImage(user?.image)
    }, [authUser, isAuthUser, image, user])


    if (!image && !user && !isAuthUser)
        return null
    
    return (
        <div>
        <Image src={getImageUser(currentImage)} 
                alt={"user"} width={50} height={50}
                className={cls(cl.image, className)} 
                unoptimized={true}  />
        </div>
    )
}
