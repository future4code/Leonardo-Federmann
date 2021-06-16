import {deleteUserData} from '../data/deleteUserData'
import {getTokenData} from '../middlewares/authenticator'
import { authenticationData } from '../model/types'
import {getUserById} from '../data/getUserById'
import {user} from '../model/types'

export async function deleteUserBusiness (id:string, token:string):Promise<string>{
    const tokenData: authenticationData | null = getTokenData(token)
    if(!tokenData){
        throw new Error('Unauthorized')
    }

    if(tokenData.role !== 'ADMIN'){
        throw new Error('Only administrators are allowed to delete other users.')
    }

    if(!id){
        throw new Error(`Please insert user's ID.`)
    }

    const userToBeDeleted = getUserById(id)
    if(!userToBeDeleted){
        throw new Error('There is no user with the inserted ID.')
    }

    await deleteUserData(id)

    return `User successfully deleted.`
}