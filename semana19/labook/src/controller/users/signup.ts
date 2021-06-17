import { Request, Response} from 'express'
import {generateId} from '../../middlewares/generateId'
import connection from '../../data/connection'
import {generateToken, getTokenData} from '../../middlewares/authenticator'
import {createHash, compareHash} from '../../middlewares/hashManager'
import {authenticationData} from '../../model/authenticationData'
import {loginAndSignupDTO, user} from '../../model/users'
import {signupBusiness} from '../../business/users/signupBusiness'

export async function signup (req:Request, res:Response):Promise<void>{
    try {
     
        const { name, email, password } = req.body
  
        const response:loginAndSignupDTO = await signupBusiness(name, email, password)
  
        res.status(201).send(response)
  
     } catch (error) {
        res.status(error.statusCode).send({
           error:error.message
        })
     }
}
