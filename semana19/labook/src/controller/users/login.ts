import { Request, Response} from 'express'
import {generateId} from '../../middlewares/generateId'
import connection from '../../data/connection'
import {generateToken, getTokenData} from '../../middlewares/authenticator'
import {createHash, compareHash} from '../../middlewares/hashManager'
import {authenticationData} from '../../model/authenticationData'
import {user} from '../../model/users'
import { loginBusiness } from '../../business/users/loginBusiness'
import {loginAndSignupDTO} from '../../model/users'

export async function login (req:Request, res:Response):Promise<void>{
    try {

        const { email, password } = req.body

        const response:loginAndSignupDTO = await loginBusiness(email, password)

        res.status(200).send(response)
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}