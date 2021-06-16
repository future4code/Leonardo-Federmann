export type user = {
    id: string
    email: string
    password: string
    name: string
    nickname: string
}

export enum USER_ROLES{
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type authenticationData = {
    id: string,
    role: USER_ROLES
}