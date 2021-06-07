import {Request, Response} from 'express'
import connection from '../connection'
import {generateToken} from '../middlewares/authenticator'

export async function login (req:Request, res:Response):Promise<void>{
    try{
        const {email, password} = req.body
        if(!email){
            throw new Error('Favor inserir um email.')
        }
        if(!password){
            throw new Error('Favor inserir uma senha.')
        }
        if(!email.includes('@')){
            throw new Error('Favor inserir um email válido (com @).')
        }

        const user = await connection('User').where({email})

        if(!user[0]){
            throw new Error('Usuário inválido.')
        }

        if(password !== user[0].password){
            throw new Error('Senha incorreta.')
        }

        const token = generateToken({id:user[0].id})
        res.status(200).send({
            token,
            message:"Login realizado com sucesso!"
        })

    }catch(error){
        res.status(400).send({
            message:error.message
        })
    }
}