import { Request, Response} from 'express'
import {generateId} from '../../middlewares/generateId'
import connection from '../../data/connection'
import {generateToken, getTokenData} from '../../middlewares/authenticator'
import {createHash, compareHash} from '../../middlewares/hashManager'
import {authenticationData} from '../../model/authenticationData'
import {user} from '../../model/users'

export async function createPost (req:Request, res:Response):Promise<void>{
    try {
        let message = "Success!"
  
        const { photo, description, type } = req.body
  
        const token: string = req.headers.authorization as string
  
        const tokenData: authenticationData | null = getTokenData(token)
  
        const id: string = generateId()
  
        tokenData && await connection("labook_posts")
           .insert({
              id,
              photo,
              description,
              type,
              author_id: tokenData.id
           })
  
        res.status(201).send({ message })
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}