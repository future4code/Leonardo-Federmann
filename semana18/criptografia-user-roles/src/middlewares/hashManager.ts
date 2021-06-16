import {genSaltSync, hashSync, compareSync} from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export function generateHash (plaintext:string):string{
    const salt = genSaltSync(Number(process.env.COST))
    return hashSync(plaintext, salt)
}

export function compareHash(plaintext:string, hash:string):boolean{
    return compareSync(plaintext, hash)
}