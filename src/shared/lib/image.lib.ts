import { MEDIA_API_URL, PRODUCTION_API_URL } from "../data/api.data"


export const getImage = (image: string) => {    
    if (image.startsWith('http'))
        return image
    return `${MEDIA_API_URL}/${image}`
}