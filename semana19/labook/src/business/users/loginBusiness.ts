import { Request, Response} from 'express'
import {generateId} from '../../middlewares/generateId'
import connection from '../../data/connection'
import {generateToken, getTokenData} from '../../middlewares/authenticator'
import {createHash, compareHash} from '../../middlewares/hashManager'
import {authenticationData} from '../../model/authenticationData'
import {loginAndSignupDTO, user} from '../../model/users'
import { CustomError } from '../CustomError'
import { loginData } from '../../data/users/loginData'

export async function loginBusiness (email:string, password:string):Promise<loginAndSignupDTO>{
    try{
        let message:string = ""
  
        if (!email || !password) {
           message = '"email" and "password" must be provided'
           throw new CustomError(406,message)
        }
  
        const user: user | null = await loginData(email)

        if (!user) {
           message = "Invalid credentials"
           throw new CustomError(401,message)
        }
  
        const passwordIsCorrect: boolean = compareHash(password, user.password)
  
        if (!passwordIsCorrect) {
            message = "Invalid credentials"
            throw new CustomError(401,message)
        }
  
        const token: string = generateToken({
           id: user.id
        })

        message = `You have successfully loged in, ${user.name}!`
  
        return { message, token }
    }catch(error){
        throw new CustomError(error.statusCode, error.message)
    }
}