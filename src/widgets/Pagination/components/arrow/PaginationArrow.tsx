import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_PaginationArrow.module.scss'
import { Button } from "@/shared/ui/Button/ui/Button";
import { ARROW_BLACK_PURPLE__ICON, ARROW_GRAY__ICON } from "@/shared/ui/Icon/data/arrow.data.icon";
import { Axis } from "@/shared/ui/Icon/model/model";
import { ButtonView } from "@/shared/model/button.model";

interface PaginationArrowProps{
    disabled?: boolean
    axis?: Axis,
    onClick?: Function
    className?: string,
    classNameImage?: string,
}

export const PaginationArrow:FC<PaginationArrowProps> = ({disabled=false, axis=Axis.Right, onClick, className}) => {
    const handleOnClick = () => {
        if (onClick && !disabled)
            onClick()
    } 

    return (
        <Button arrow={disabled ? ARROW_GRAY__ICON : ARROW_BLACK_PURPLE__ICON} 
                arrowAxis={axis} 
                view={ButtonView.Empty}
                onClick={() => handleOnClick()} 
                disabled={disabled}
                className={cls(cl.button, disabled ? cl.disabled : '', className)} />
    )
}
