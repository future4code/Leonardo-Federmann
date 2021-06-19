import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { loginAndSignupDTO, user } from '../../model/users'
import { CustomError } from '../../business/CustomError'

export async function loginData(email: string): Promise<user | null> {
    const queryResult: any = await connection("labook_users")
        .select("*")
        .where({ email })
    if (!queryResult[0]) {
        return null
    } else {
        const user: user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }
        return user
    }
}