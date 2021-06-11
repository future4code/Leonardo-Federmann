import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'
import { recipe } from '../types'

export async function getFeed(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        const followedUsers = await connection
            .select('followed_user')
            .from('cookenu_follow_users')
            .where('following_user', '=', tokenInfo.id)

        if (!followedUsers[0]) {
            res.status(200).send({
                message: 'You are not following any user.'
            })
        }

        const recipesInfo = await connection.raw(`
        SELECT 
            cookenu_recipes.id as id,
            cookenu_recipes.name as name,
            description,
            creation_date as createdAt,
            cookenu_users.name as creator, 
            creator_id as creatorId 
        FROM cookenu_users 
        JOIN cookenu_recipes ON cookenu_users.id = creator_id 
        JOIN cookenu_follow_users ON followed_user = cookenu_users.id 
        WHERE following_user="${tokenInfo.id}"
        ORDER BY creation_date DESC;
        `)

        const recipes: recipe[] = recipesInfo[0].map((recipe: recipe) => {
            const { id, name, description, createdAt, creator, creatorId } = recipe
            return {
                id,
                name,
                description,
                createdAt,
                creator,
                creatorId
            }
        })

        if (!recipes[0]) {
            res.status(200).send({
                message: 'The users you are following have no recipes.'
            })
        }
        recipes.forEach((recipe) => {
            const correctedDate = new Date(recipe.createdAt).toISOString().split('T')[0]
            recipe.createdAt = correctedDate
        })

        res.status(200).send(recipes)

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}