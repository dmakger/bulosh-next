import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_AuthContent.module.scss'
import { UserAPI } from "../../api/user.api";
import { UserImage } from "../Image/UserImage";
import { logout } from "../../lib/auth-token.lib";

interface AuthContentProps{
    className?: string,
    classNameContent?: string,
}

export const AuthContent:FC<AuthContentProps> = ({className}) => {
    // API
    const {data: authUser} = UserAPI.useGetAuthUserQuery()

    // HANDLE
    const onClickLogout = () => {
        logout()
        window.location.reload();
    }

    return (
        <div className={cls(cl.block, className)}>
            <button className={cl.item}>
                <span className={cl.name}>{authUser?.user.username}</span>
                <UserImage isAuthUser={true} />
            </button>
            <button onClick={onClickLogout} className={cl.item}>
                Выйти
            </button>
        </div>
    )
}
