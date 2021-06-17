import { Request, Response} from 'express'
import {generateId} from '../../middlewares/generateId'
import connection from '../../data/connection'
import {generateToken, getTokenData} from '../../middlewares/authenticator'
import {createHash, compareHash} from '../../middlewares/hashManager'
import {authenticationData} from '../../model/authenticationData'
import {loginAndSignupDTO, user} from '../../model/users'
import { CustomError } from '../CustomError'
import { signupData } from '../../data/users/signupData'

export async function signupBusiness(
    name: string,
    email:string, 
    password:string)
    :Promise<loginAndSignupDTO>{
    try{
        let message:string = ""
  
        if (!name || !email || !password) {
           message = '"name", "email" and "password" must be provided'
           throw new CustomError(406,message)
        }
  
        const id: string = generateId()
  
        const cypherPassword = createHash(password);
  
        await signupData(
              id,
              name,
              email,
              cypherPassword
           )
  
        const token: string = generateToken({ id })

        message = `Welcome to LaBook, ${name}!`
  
        return{ message, token }
    }catch(error){
        throw new CustomError(error.statusCode, error.message)
    }
}