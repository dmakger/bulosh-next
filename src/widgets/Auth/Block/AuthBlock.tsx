"use client"

import { FC, FormEvent, ReactNode, useRef, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_AuthBlock.module.scss'
import { LogoSmall } from "@/shared/ui/Logo/Small/LogoSmall";
import { Button } from "@/shared/ui/Button/ui/Button";
import { ButtonType, ButtonView } from "@/shared/model/button.model";
import { AuthType } from "@/shared/data/login.data";
import Link from "next/link";
import { AUTH_PAGES, MAIN_PAGES } from "@/config/pages-url.config";
import Input from "@/shared/ui/Input/Input";
import { EInputTextVariant } from "@/shared/ui/Input/Text/data/text.input.data";
import { getFormData } from "@/shared/lib/form.lib";
import { UserAPI } from "@/entities/User/api/user.api";
import { IAuthRequest } from "@/entities/User/model/user.model";
import { useRouter } from "next/navigation";

interface AuthBlockProps {
    type?: AuthType

    className?: string,
    onClick?: Function
}

export const AuthBlock:FC<AuthBlockProps> = ({type=AuthType.Login, className, onClick}) => {
    // ROUTER
    const router = useRouter()
    
    // STATE
    const [error, setError] = useState<string | undefined>()

    // REF
    const formRef = useRef(null)

    // API
    const [login] = UserAPI.useLoginMutation()
    const [register] = UserAPI.useRegisterMutation()


    // HANDLE
    const handleOnSubmit = async (e: FormEvent) => {
        const formData = getFormData(e, formRef)
        if (formData === undefined) return
        
        if (type === AuthType.Login) {
            await login(formData as IAuthRequest).then(r => {
                if ("error" in r)
                    setError("Неправильный логин или пароль")
                else {
                    setError(undefined)
                    router.push(MAIN_PAGES.HOME);
                }
            }, () => {
                setError("Неправильный логин или пароль")
            })
        }
        else {
            await register(formData as IAuthRequest).then(r => {
                if ("error" in r)
                    setError("Такой пользователь уже существует")
                else {
                    setError(undefined)
                    router.push(MAIN_PAGES.HOME);
                }
            })
        }
    }

    return (
        <div className={cls(cl.wrapper, className)}>
            <LogoSmall isLink={true} />
            <form className={cl.block} onSubmit={handleOnSubmit} ref={formRef}>
                <h1 className={cl.title}>{type === AuthType.Login ? "Вход" : "Регистрация"}</h1>
                <div className={cl.form}>
                    <Input.Text name="username" variant={EInputTextVariant.B_PURPLE} placeholder="Логин" />
                    <Input.Text name="password" type={"password"} variant={EInputTextVariant.B_PURPLE} placeholder="Пароль" />
                    {error && <span className={cls(cl.error, cl.message)}>{error}</span>}
                </div>

                <div className={cl.bottom}>
                    <Button view={ButtonView.PrimaryToOutline} type={ButtonType.Submit}
                            title={type === AuthType.Login ? "Вход" : "Регистрация"} 
                            onClick={onClick} className={cl.button}/>
                    {type === AuthType.Login ? (
                        <Link href={AUTH_PAGES.SIGN_UP} className={cl.link}>Зарегистрироваться</Link>
                    ) : (
                        <Link href={AUTH_PAGES.LOGIN} className={cl.link}>Войти</Link>
                    )}
                </div>
            </form>
        </div>
    )
}
