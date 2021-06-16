import {hashSync, genSaltSync, compareSync} from 'bcryptjs'

export function createHash(plaintext:string):string{
    const salt = genSaltSync(Number(process.env.COST))
    return hashSync(plaintext, salt)
}

export function compareHash(plaintext:string, hash:string):boolean{
    return compareSync(plaintext, hash)
}