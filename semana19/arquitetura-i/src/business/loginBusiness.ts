import {getUserByEmail} from '../data/getUserByEmail'
import {generateToken} from '../middlewares/authenticator'
import {compareHash} from '../middlewares/hashManager'
import { user } from '../model/types'

export async function loginBusiness (
    email: string,
    password: string
):Promise<string>{
    if(!email){
        throw new Error('Please insert your email.')
    }

    if(!password){
        throw new Error('Please insert your password.')
    }

    const user:user|null = await getUserByEmail(email)

    if(!user){
        throw new Error('User not found.')
    }

    if(!compareHash(password, user.password)){
        throw new Error('Unauthorized')
    }

    const token:string = generateToken({id: user.id, role:user.role})

    return token
}