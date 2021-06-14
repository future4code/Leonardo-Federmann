import connection from './connection'

export async function insertUser (
    id:string, 
    name:string, 
    email:string, 
    password:string, 
    role:string
    ):Promise<void>{
        await connection
        .insert({id, name, email, password, role})
        .into('User')
    }