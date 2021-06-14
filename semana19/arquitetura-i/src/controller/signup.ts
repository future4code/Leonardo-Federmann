import {Request, Response} from 'express'
import {signupBusiness} from '../business/signupBusiness'

export async function signup(req:Request, res:Response):Promise<void>{
    try{
        const {name, email, password} = req.body
        let role:string = req.body.role

        const uppserCaseRole:string = role.toUpperCase()
        role = uppserCaseRole

        const token = await signupBusiness(name, email, password, role)

        res.status(200).send({
            message: `User ${name} successfully created!`,
            token
        })
    }catch(error){
        res.status(400).send(error.message)
    }
}