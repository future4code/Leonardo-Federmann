import {Request, Response} from 'express'
import {loginBusiness} from '../business/loginBusiness'

export async function login (req:Request, res: Response):Promise<void>{
    try{
        const {email, password} = req.body

        const token:string = await loginBusiness(email, password)

        res.status(200).send({
            message: "You haved successfully loged in!",
            token
        })

    }catch(error){
        res.status(400).send({
            error: error.message
        })
    }
}