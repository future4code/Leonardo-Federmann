import connection from './connection'

export async function deleteUserData(id:string):Promise<void>{
    await connection.delete().from('User').where({id})
}