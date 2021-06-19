import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { loginAndSignupDTO, user } from '../../model/users'
import { CustomError } from '../../business/CustomError'

export async function signupData(
    id: string,
    name: string,
    email: string,
    password: string
): Promise<void> {
    try {
        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password
            })
    } catch (error) {
        throw new CustomError(500, "There was a problem in the system. Please try again later.")
    }
}