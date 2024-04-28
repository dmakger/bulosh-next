import { IIcon } from "../model/model";

import ArrowFillGray from '@/shared/assets/arrow/ArrowFillGray.svg'
import ArrowFillGrayDark from '@/shared/assets/arrow/ArrowFillGrayDark.svg'
import ArrowFillPurple from '@/shared/assets/arrow/ArrowFillPurple.svg'
import ArrowFillBlack from '@/shared/assets/arrow/ArrowFillBlack.svg'


export const ARROW_GRAY__ICON: IIcon = {
    default: ArrowFillGray,
}

export const ARROW_GRAY_PURPLE__ICON: IIcon = {
    default: ArrowFillGray,
    defaultHovered: ArrowFillGrayDark,
    active: ArrowFillPurple,
}

export const ARROW_BLACK_PURPLE__ICON: IIcon = {
    default: ArrowFillBlack,
    defaultHovered: ArrowFillPurple,
}
