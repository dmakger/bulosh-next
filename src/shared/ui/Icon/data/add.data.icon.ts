import { IIcon } from "../model/model";

import DefaultAdd from '@/shared/assets/add/DefaultAdd.svg'
import ActiveAdd from '@/shared/assets/add/ActiveAdd.svg'
import AddWhiteSVG from '@/shared/assets/add/AddWhite.svg'


export const ADD__ICON: IIcon = {
    default: DefaultAdd,
    active: ActiveAdd,
}

export const ADD_PURPLE_WHITE__ICON: IIcon = {
    default: DefaultAdd,
    defaultHovered: AddWhiteSVG,
}
