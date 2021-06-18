import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'
import { generateId } from '../services/generateId'

export async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const { name, description } = req.body

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }
        if (!name) {
            res.statusCode = 401
            throw new Error(`Please enter the recipe's name.`)
        }
        if (!description) {
            res.statusCode = 401
            throw new Error(`Please enter the recipe's description.`)
        }

        const id: string = generateId()
        const creation_date: string = new Date().toISOString().split('T')[0]
        const creator_id = tokenInfo.id

        await connection.insert({
            id,
            name,
            description,
            creation_date,
            creator_id
        }).into('cookenu_recipes')

        res.status(200).send({
            message: `Recipe ${name} successfully created!`
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}