import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { user } from '../../model/users'
import { createPostBusiness } from '../../business/posts/createPostBusiness'
import { CustomError } from '../../business/CustomError'

export async function createPost(req: Request, res: Response): Promise<void> {
   try {

      const { photo, description, type } = req.body
      const token: string = req.headers.authorization as string

      const message:string = await createPostBusiness(photo, description, type, token)
      if(message === "You have created a new post!"){
         res.status(201).send({ message})
      }
      
   } catch (error) {
      res.status(error.statusCode).send({
         error: error.message
      })
   }
}