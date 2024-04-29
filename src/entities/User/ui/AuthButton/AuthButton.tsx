"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_AuthButton.module.scss'
import { getAccessToken, isAuth } from "../../lib/auth-token.lib";
import { ButtonSignIn } from "@/features/Button/User/SignIn/ButtonSignIn";
import { UserModal } from "@/features/Modal/User/UserModal";

interface AuthButtonProps{
    className?: string,
}

export const AuthButton:FC<AuthButtonProps> = ({className}) => {
    // STATE
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // EFFECT
    useEffect(() => {
        setIsAuthenticated(isAuth())
    }, [])

    // HANDLE
    const handleSignIn = (isAuth: boolean) => {
        setIsAuthenticated(isAuth);
    }
    

    if (!isAuthenticated)
        return <ButtonSignIn onClick={handleSignIn} className={className} />

    return (
        <UserModal className={className} />
    )
}
