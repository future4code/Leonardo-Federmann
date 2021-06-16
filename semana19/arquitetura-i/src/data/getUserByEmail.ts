import { user } from '../model/types';
import connection from './connection'

export async function getUserByEmail (email:string):Promise<user | null>{
    try{
        const user:user[] = await connection('User').where({email})
        return user[0]
    }catch(error){
        return null
    }
}