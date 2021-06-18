import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

export async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        const recipe = await connection('cookenu_recipes').where({ id })

        if (!recipe[0]) {
            res.statusCode = 400
            throw new Error('Recipe is not registered.')
        }

        const creator = await connection
            .select('name')
            .from('cookenu_users')
            .where({ id: recipe[0].creator_id })

        const { name, description, creation_date } = recipe[0]

        res.status(200).send({
            id,
            name,
            creator: creator[0].name,
            description,
            createdAt: new Date(creation_date).toISOString().split('T')[0],
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}