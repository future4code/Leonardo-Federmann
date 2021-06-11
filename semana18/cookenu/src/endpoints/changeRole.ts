import {Request, Response} from 'express'
import connection from '../connection'
import {generateToken, getTokenData} from '../services/authenticator'

export async function changeRole (req:Request, res:Response):Promise<void>{
    try{
        const token = req.headers.authorization as string
        const newRole = req.body.newRole.toUpperCase() as string

        const tokenInfo = getTokenData(token)
        if(!tokenInfo){
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        if(!newRole){
            res.statusCode = 400
            throw new Error('Please insert a new role.')
        }

        if(newRole !== 'BEGINNER' && newRole !== 'INTERMEDIATE' && newRole !== 'CHEF'){
            res.statusCode = 400
            throw new Error('Please enter a valid role (BEGINEER, INTERMEDIATE or CHEF).')
        }

        const newToken = generateToken({id: tokenInfo.id, role: newRole})

        await connection('cookenu_users')
        .update({role: newRole})
        .where({id:tokenInfo.id})

        res.status(200).send({
            message: `Your role was successfully updated to ${newRole}`,
            newToken
        })

    }catch(error){
        res.send({
            error: error.message
        })
    }
}