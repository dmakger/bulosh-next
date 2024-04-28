import { FC } from "react"

import cl from './_Header.module.scss'
import { LogoSmall } from "@/shared/ui/Logo/Small/LogoSmall";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { CategoryModal } from "@/features/Modal/Category/CategoryModal";
import { Search } from "../Search";
import { Button } from "@/shared/ui/Button/ui/Button";
import { ButtonView } from "@/shared/model/button.model";
import { CART_BLACK_PURPLE__ICON } from "@/shared/ui/Icon/data/cart.data.icon";

interface HeaderProps{
}

export const Header:FC<HeaderProps> = () => {
    return (
        <Wrapper1280 className={cl.wrapper} classNameContent={cl.wrapperContent}>
            <LogoSmall />
            <CategoryModal />
            <Search />
            <Button view={ButtonView.BlackTToPurpleTV} 
                    title={"Корзина"} beforeImage={CART_BLACK_PURPLE__ICON} 
                    className={cl.buttonTitle} />
        </Wrapper1280>
    )
}
