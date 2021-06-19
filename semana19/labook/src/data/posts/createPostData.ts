import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { CustomError } from '../../business/CustomError'
import { user } from '../../model/users'

export async function createPostData(
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at : string,
    author_id: string
): Promise<void> {
    try{
        await connection("labook_posts")
        .insert({
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        })
    }catch(error){
        throw new CustomError(500, error)
        // "There was a problem with the system. Please try again later."
    }
}