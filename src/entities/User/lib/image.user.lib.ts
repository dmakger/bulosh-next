import UserDefaultJPG from "@/shared/assets/user/UserDefault.jpg"
import { getImage } from "@/shared/lib/image.lib"


export const getImageUser = (image?: string | null) => {
    if (!image)
        return UserDefaultJPG
    return getImage(image)
}