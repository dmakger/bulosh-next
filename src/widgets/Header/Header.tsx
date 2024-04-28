import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Header.module.scss'
import { LogoSmall } from "@/shared/ui/Logo/Small/LogoSmall";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { Button } from "@/shared/ui/Button/ui/Button";
import { ARROW_GRAY_PURPLE__ICON } from "@/shared/ui/Icon/data/arrow.data.icon";
import { Axis } from "@/shared/ui/Icon/model/model";
import { ButtonView } from "@/shared/model/button.model";
import { CATALOG__ICON } from "@/shared/ui/Icon/data/catalog.data.icon";
import { CategoryList } from "@/features/List/Category/CategoryList";

interface HeaderProps{
}

export const Header:FC<HeaderProps> = () => {
    return (
        <Wrapper1280 className={cl.wrapper}>
            <LogoSmall />
            <Button title="Текст"/>
            <Button title="Текст" isActive={true}/>
            <Button title="Текст" arrow={ARROW_GRAY_PURPLE__ICON} arrowAxis={Axis.Right}/>
            <Button title="Текст" isActive={true} arrow={ARROW_GRAY_PURPLE__ICON}/>
            <Button title="Текст" view={ButtonView.PrimaryToOutline} beforeImage={CATALOG__ICON}/>
            <CategoryList />
        </Wrapper1280>
    )
}
