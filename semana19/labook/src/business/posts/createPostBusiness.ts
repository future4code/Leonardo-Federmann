import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { CustomError } from '../CustomError'
import { user } from '../../model/users'
import { createPostData } from '../../data/posts/createPostData'

export async function createPostBusiness(
    photo: string,
    description: string,
    type: string,
    token: string
): Promise<string> {
    try {

        let message:string = "You have created a new post!"
        const tokenData: authenticationData | null = getTokenData(token)

        if(!tokenData){
            message = "Unauthorized"
            throw new CustomError(401, message)
        }

        if(!photo){
            message = "Please insert a photo"
            throw new CustomError(400, message)
        }

        if(!description){
            message = "Please insert a description for your post."
            throw new CustomError(400, message)
        }

        if(!type){
            message = "Please choose a post type"
            throw new CustomError(400, message)
        }

        const correctedType = type.toLowerCase()

        if(correctedType !== "event" && type !== "normal"){
            message = "Please choose a valid post type (EVENT or NORMAL)"
            throw new CustomError(400, message)
        }

        const id: string = generateId()

        const creationDate = new Date().toISOString().split('T')[0]

        tokenData && await createPostData(
            id,
            photo,
            description,
            correctedType,
            creationDate,
            tokenData.id
        )

        return message

    } catch (error) {
        throw new CustomError(error.statusCode, error.message)
    }
}