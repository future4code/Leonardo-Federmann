import {Request, Response} from 'express'
import connection from '../connection'
import {getTokenData} from '../middlewares/authenticator'

export async function deleteUser(req:Request, res:Response):Promise<void>{
    try{
        const token = req.headers.authorization
        const id = req.params.id

        if(!token){
            res.statusCode = 403
            throw new Error('Favor inserir um token.')
        }
        const tokenInfo = getTokenData(token)

        if(!tokenInfo){
            res.statusCode = 403
            throw new Error('Não autorizado')
        }
        if(tokenInfo.role !== 'ADMIN'){
            res.statusCode = 403
            throw new Error('Somente administradores podem deletar um usuário.')
        }
        if(!id){
            res.statusCode = 401
            throw new Error('Favor inserir um id de usuário.')
        }

        await connection('User').delete('User').where({id})

        res.status(200).send({
            message: 'Usuário deletado com sucesso'
        })

    }catch(error){
        res.send({
            message: error.message
        })
    }
}