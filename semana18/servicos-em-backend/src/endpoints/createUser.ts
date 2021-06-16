import {Request, Response} from 'express'
import connection from '../connection'
import {generateId} from '../middlewares/generateId'
import {generateToken} from '../middlewares/authenticator'
import {generateHash} from '../middlewares/hashManager'
import getAddress from '../functions/getAddress'
import { USER_ROLES, address } from '../types'

export async function createUser(req:Request, res:Response):Promise<void>{
   try{
      const { email, password, role, cep, address_complement, address_number } = req.body
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

      if(!role){
        throw new Error('Favor inserir um tipo de usuário.')
      }

      const correctedRole:string = role.toUpperCase()

      if(!(correctedRole in USER_ROLES)){
          throw new Error('Favor inserir um tipo válido (NORMAL ou ADMIN).')
      }

      if(!address_number){
          throw new Error('Favor inserir um número de residência.')
      }

      if(!cep){
        throw new Error('Favor inserir um CEP.')
    }

    if(cep.includes('-')){
        throw new Error('Favor inserir o CEP sem hífen ( - ).')
    }

    if(cep.length !== 8 || !Number(cep)|| typeof cep !== 'string'){
        throw new Error('Favor inserir um CEP válido.')
    }

      const user_address:address | null = await getAddress(cep)
      if(!user_address){
          throw new Error('CEP inválido.')
      }

      const cryptedPassword = generateHash(password)

      await connection.insert({id, email, password: cryptedPassword, role: correctedRole}).into('User')
      await connection.insert({
        user_id: id,
        cep, 
        logradouro: user_address.street, 
        numero: address_number,
        complemento: address_complement ? address_complement : "",
        bairro: user_address.neighborhood,
        cidade: user_address.city,
        estado: user_address.state
    }).into('address')

      const token = generateToken({id, role})

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