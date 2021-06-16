import { user } from '../model/types';
import connection from './connection'

export async function getUserById (id:string):Promise<user | null>{
    try{
        const user:user[] = await connection('User').where({id})
        const {name, email, password, role} = user[0]
        return {
            id,
            name,
            email,
            password,
            role
        }
    }catch(error){
        return null
    }
}