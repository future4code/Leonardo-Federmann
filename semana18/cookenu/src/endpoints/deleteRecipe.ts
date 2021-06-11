import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

// Como os roles que criem incluem os tipos BEGINNER, INTERMEDIATE e CHEF (em vez de NORMAL e ADMIN),
// Alterei a solicitação do exercício para que somente usuários do tipo CHEF possam deletar receitas
//que não são dele. 
export async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id as string

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        if (!id) {
            res.statusCode = 400
            throw new Error('Please insert a valid ID for the recipe.')
        }

        if (tokenInfo.role !== 'CHEF') {
            const allUserRecipesIds = await connection
                .select('id')
                .from('cookenu_recipes')
                .where({ creator_id: tokenInfo.id })

            if (!allUserRecipesIds[0]) {
                res.statusCode = 400
                throw new Error('You have no recipes.')
            }

            let userRecipesWithTheSameId: number = 0
            allUserRecipesIds.forEach((recipeId) => {
                if (recipeId.id === id) {
                    userRecipesWithTheSameId++
                }
            })

            if (userRecipesWithTheSameId === 0) {
                res.statusCode = 400
                throw new Error('You have no recipes with this id.')
            }
        }

        await connection.delete().from('cookenu_recipes').where({ id })

        res.status(200).send({
            message: 'Recipe successfully deleted.'
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}