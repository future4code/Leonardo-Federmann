import {Request, Response} from 'express'
import {deleteUserBusiness} from '../business/deleteUserBusiness'

export async function deleteUser(req:Request, res:Response):Promise<void>{
    try{
        const id = req.params.id as string
        const token = req.headers.authorization as string

        const message:string = await deleteUserBusiness(id, token)

        res.status(200).send(message)

    }catch(error){
        res.status(400).send({
            error: error.message
        })
    }
}