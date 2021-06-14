import connection from './connection'
import {user} from '../model/types'

export async function getAllUsers():Promise<user[]>{
    const users:user[] = await connection('User')
    return users
}