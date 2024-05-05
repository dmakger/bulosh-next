import ImageDefaultJPG from "@/shared/assets/ImageDefault.svg"
import { getImage } from "@/shared/lib/image.lib"
import { IProduct } from "../model/product.model"


export const getProductUser = (image: IProduct['image']) => {
    if (!image)
        return ImageDefaultJPG    
    return getImage(image)
}