import { FC } from "react"
import { ImageSmart } from "@/shared/ui/Image/Smart/ImageSmart"
import { ARROW_GRAY__ICON } from "../../data/arrow.data.icon"
import { Axis, IIcon, IIconProps } from "../../model/model"

interface ArrowIconProps extends IIconProps {
}

export const ArrowIcon:FC<ArrowIconProps> = ({icon=ARROW_GRAY__ICON, ...rest}) => {
    return (
        <ImageSmart icon={icon} {...rest}/>
    )
}
