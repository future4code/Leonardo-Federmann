import { query, Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { user } from '../../model/users'
import { post, postDTO } from '../../model/posts'
import { CustomError } from '../CustomError'
import {getPostData} from '../../data/posts/getPostData'

export async function getPostBusiness(id: string, token:string): Promise<postDTO> {
    try{
        let message:string = "Here is the post you are looking for!"
        
        const tokenData:authenticationData | null = getTokenData(token)

        if(!tokenData){
            message = "Unauthorized"
            throw new CustomError(401, message)
        }
    
        const post: post | null = await getPostData(id)

        if (!post) {
            message = "Post not found"
            throw new CustomError(404, message)
        }

        return { message, post }
    }catch(error){
        throw new CustomError(error.statusCode, error.message)
    }
}