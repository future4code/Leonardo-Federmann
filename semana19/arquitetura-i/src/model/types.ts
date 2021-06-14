import { StringMappingType } from "typescript"

export type authenticationData = {
    id: string,
    role: string
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
}