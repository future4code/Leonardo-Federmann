import { Request, Response } from 'express'
import { generateId } from '../../middlewares/generateId'
import connection from '../../data/connection'
import { generateToken, getTokenData } from '../../middlewares/authenticator'
import { createHash, compareHash } from '../../middlewares/hashManager'
import { authenticationData } from '../../model/authenticationData'
import { user } from '../../model/users'
import { post, postDTO } from '../../model/posts'
import { CustomError } from '../../business/CustomError'

export async function getPostData(id: string): Promise<post | null> {
    try {
        const queryResult: any = await connection("labook_posts")
            .select("*")
            .where({ id })

        if (!queryResult[0]) {
            return null
        } else {
            const createdAt = new Date(queryResult[0].created_at).toISOString().split('T')[0]
            const post: post = {
                id: queryResult[0].id,
                photo: queryResult[0].photo,
                description: queryResult[0].description,
                type: queryResult[0].type,
                createdAt,
                authorId: queryResult[0].author_id,
            }
            return post
        }
    } catch (error) {
        throw new CustomError(error.statusCode, error.message)
    }
}
