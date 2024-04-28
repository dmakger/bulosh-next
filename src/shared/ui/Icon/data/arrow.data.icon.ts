import { IIcon } from "../model/model";

import ArrowFillWhite from '@/shared/assets/arrow/ArrowFillWhite.svg'
import ArrowFillGray from '@/shared/assets/arrow/ArrowFillGray.svg'
import ArrowFillGrayDark from '@/shared/assets/arrow/ArrowFillGrayDark.svg'
import ArrowFillPurple from '@/shared/assets/arrow/ArrowFillPurple.svg'


export const ARROW_GRAY__ICON: IIcon = {
    default: ArrowFillGray,
}

export const ARROW_GRAY_PURPLE__ICON: IIcon = {
    default: ArrowFillGray,
    defaultHovered: ArrowFillGrayDark,
    active: ArrowFillPurple,
}
