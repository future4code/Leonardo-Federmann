import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { user } from '../../model/users'
import { post, postDTO } from '../../model/posts'
import { getPostBusiness } from '../../business/posts/getPostBusiness'
import { CustomError } from '../../business/CustomError'

export async function getPost(req: Request, res: Response): Promise<void> {
   try {
      const { id } = req.params
      const token = req.headers.authorization as string

      const response: postDTO = await getPostBusiness(id, token)

      res.status(200).send(response)

   } catch (error) {
      res.status(error.statusCode).send({
         error: error.message
      })
   }
}