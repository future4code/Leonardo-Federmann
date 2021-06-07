import {Request, Response} from 'express'
import connection from '../connection'
import {generateId} from '../middlewares/generateId'
import {generateToken} from '../middlewares/authenticator'
import {user} from '../types'

export async function createUser(req:Request, res:Response):Promise<void>{
   try{
      const { email, password} = req.body
      const id = generateId()
      if(!email){
         throw new Error('Favor inserir um email.')
      }

      if(!email.includes('@')){
         throw new Error('Favor inserir um email válido (com @).')
      }

      if(!password){
         throw new Error('Favor inserir uma senha.')
      }

      if(password.length<6){
         throw new Error('Favor inserir uma senha com no mínimo 6 caracteres.')
      }

      await connection.insert({id, email, password}).into('User')

      const token = generateToken({id})

      res.status(200).send({
         token,
         message: 'Usuário criado com sucesso!'
      })
   }catch(error){
      res.status(400).send({
         message: error.message
      })
   }
}