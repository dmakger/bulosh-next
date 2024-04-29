"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import { Button } from "@/shared/ui/Button/ui/Button";
import { UserAPI } from "@/entities/User/api/user.api";
import { IAuthRequest } from "@/entities/User/model/user.model";
import { ButtonView } from "@/shared/model/button.model";

interface ButtonSignInProps{
    onClick?: Function,
    className?: string,
}

export const ButtonSignIn:FC<ButtonSignInProps> = ({onClick=()=>{}, className}) => {
    const [login] = UserAPI.useLoginMutation()

    const handleOnClick = async () => {
        
        const userData: IAuthRequest = {
            username: "adminBulosh",
            password: "erw&gfsD1"
        }
        await login(userData).then(r => {
            onClick(true)
        }, e => {
            onClick(false)
        })
    }

    return (
        <Button view={ButtonView.PrimaryOToFill}
                title="Войти" 
                onClick={() => handleOnClick()} />
    )
}
