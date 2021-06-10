import {Request, Response} from 'express'
import connection from '../connection'
import { generateToken } from '../services/authenticator'
import { generateId } from '../services/generateId'
import { compareHash, generateHash } from '../services/hashManager'

export async function login (req:Request, res:Response):Promise<void>{
    try{
        const { email, password } = req.body
        
        if(!email){
            res.statusCode = 401
            throw new Error('Please enter your e-mail.')
        }
        if(!password){
            res.statusCode = 401
            throw new Error('Please enter your password.')
        }

        const user = await connection
        .select('id','name', 'password')
        .from('cookenu_users')
        .where({email})
        if(user.length===0){
            res.statusCode = 401
            throw new Error('User is not registered.')
        }
        if(!compareHash(password, user[0].password)){
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        const token = generateToken({ id: user[0].id })
        res.status(200).send({
            message: `Login successfully realized!`,
            token
        })
        
    }catch(error){
        res.send({
            error: error.message
        })
    }
}