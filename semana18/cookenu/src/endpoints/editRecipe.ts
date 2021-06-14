import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

// Não inclui a restrição de editar a própria receita somente se o usuário for de um tipo determinado. Afinal,
// ele deve ser capaz de editá-la independente de quaisquer circustâncias.
export async function editRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id as string
        let { name, description } = req.body

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        if (!id) {
            res.statusCode = 400
            throw new Error('Please insert a valid ID for the recipe.')
        }

        const allUserRecipesIds = await connection
            .select('id')
            .from('cookenu_recipes')
            .where({ creator_id: tokenInfo.id })

        if (!allUserRecipesIds[0]) {
            res.statusCode = 400
            throw new Error('You have no recipes.')
        }

        let recipesWithTheSameId: number = 0
        allUserRecipesIds.forEach((recipeId) => {
            if (recipeId.id === id) {
                recipesWithTheSameId++
            }
        })
        if (recipesWithTheSameId === 0) {
            res.statusCode = 400
            throw new Error('You have no recipes with this id.')
        }

        const currentRecipe = await connection
            .select('name', 'description', 'creator_id')
            .from('cookenu_recipes')
            .where({ id })

        if (!name && !description) {
            res.statusCode = 400
            throw new Error('Please enter the new information you desire (name and/or description).')
        }

        if (!name) {
            name = currentRecipe[0].name
        }

        if (!description) {
            description = currentRecipe[0].description
        }

        await connection('cookenu_recipes')
            .update({ name, description })
            .where({ id })

        res.status(200).send({
            message: `Recipe ${name} was successfully updated!`
        })

    } catch (error) {
        res.send({
            message: error.message
        })
    }
}