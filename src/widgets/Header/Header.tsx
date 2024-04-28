import { FC } from "react"

import cl from './_Header.module.scss'
import { LogoSmall } from "@/shared/ui/Logo/Small/LogoSmall";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { CategoryModal } from "@/features/Modal/Category/CategoryModal";
import { Search } from "../Search";

interface HeaderProps{
}

export const Header:FC<HeaderProps> = () => {
    return (
        <Wrapper1280 className={cl.wrapper} classNameContent={cl.wrapperContent}>
            <LogoSmall />
            <CategoryModal />
            <Search />
        </Wrapper1280>
    )
}
