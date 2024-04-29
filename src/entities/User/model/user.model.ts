export interface IBaseUser {
    id: number,
    username: string,
    email?: string
}


export interface IUser {
    id: number,
    user: IBaseUser
    image?: string
}


export interface IAuthResponse {
    refresh: string
    access: string
}

export interface IAuthRequest {
    username: string
    password: string
}