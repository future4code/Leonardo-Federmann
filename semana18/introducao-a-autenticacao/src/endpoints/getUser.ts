import {Request, Response} from 'express'
import connection from '../connection'
import {getTokenData} from '../middlewares/authenticator'

export async function getUser (req:Request, res:Response):Promise<void>{
    try{
        const token = req.headers.authorization
        if(!token){
            throw new Error('Não autorizado')
        }
        const tokenInfo = getTokenData(token)
        if(!tokenInfo){
            throw new Error('Não autorizado')
        }
        const user = await connection.select('email').from('User').where({id:tokenInfo.id})
        res.status(200).send({
            id: tokenInfo.id,
            email: user[0].email
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
}