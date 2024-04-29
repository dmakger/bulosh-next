import Cookies from 'js-cookie'
import { IAuthResponse } from '../model/user.model'
import { CURRENT_FRONT_DOMAIN, CURRENT_FRONT_URL } from '@/shared/data/api.data'

// ===={ ENUM }====
export enum ETokens {
    'ACCESS_TOKEN' = 'access',
    'REFRESH_TOKEN' = 'refresh',
}


// ===={ BOOLEAN }====
export const isAuth = () => {
    const accessToken = getAccessToken();
    console.log('accessToken', accessToken);
    
    return accessToken !== null && accessToken !== undefined;
}



// ===={ GETTER }====
export const getTokens = () => {
    return {
        [ETokens.ACCESS_TOKEN]: getAccessToken(),
        [ETokens.REFRESH_TOKEN]: getRefreshToken(),
    } as IAuthResponse
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(ETokens.ACCESS_TOKEN)
    return accessToken || null
}

export const getRefreshToken = () => {
    const refreshToken = Cookies.get(ETokens.REFRESH_TOKEN)
    return refreshToken || null
}


export const getHeaderAuthorization = () => {
    return {
        'Authorization': `Bearer ${getAccessToken()}`
    }
}


// ===={ SAVE }====
export const saveTokensStorage = (data: IAuthResponse) => {
    console.log('save')
    saveAccessTokenStorage(data.access)
    saveRefreshTokenStorage(data.refresh)
}

export const saveAccessTokenStorage = (accessToken: string) => {
    Cookies.set(ETokens.ACCESS_TOKEN, accessToken, {
        domain: CURRENT_FRONT_DOMAIN,
        sameSite: 'strict',
        expires: 1,
    })
}

export const saveRefreshTokenStorage = (refreshToken: string) => {
    Cookies.set(ETokens.REFRESH_TOKEN, refreshToken, {
        domain: CURRENT_FRONT_DOMAIN,
        sameSite: 'strict',
        expires: 1,
    })
}


// ===={ REMOVE }====
export const removeFromStorage = () => {
    Cookies.remove(ETokens.ACCESS_TOKEN)
    Cookies.remove(ETokens.REFRESH_TOKEN)
}

export const logout = () => {
    removeFromStorage()
}