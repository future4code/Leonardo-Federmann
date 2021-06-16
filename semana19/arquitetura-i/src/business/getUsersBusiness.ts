import {getAllUsers} from '../data/getAllUsers'
import {getTokenData} from '../middlewares/authenticator'
import {authenticationData, user} from '../model/types'

export async function getUsersBusiness (token:string):Promise<user[]>{
    const tokenData: authenticationData | null = getTokenData(token)
    if(!tokenData){
        throw new Error('Unauthorized')
    }
    const users = await getAllUsers()
    return users
}