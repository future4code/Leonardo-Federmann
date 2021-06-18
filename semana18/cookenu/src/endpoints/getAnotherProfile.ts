import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

export async function getAnotherProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id as string

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }
        const user = await connection
            .select('id', 'name', 'email')
            .from('cookenu_users')
            .where({ id })

        if (!user[0]) {
            res.statusCode = 400
            throw new Error('Incorrect ID')
        }

        if (user[0].id === id) {
            res.statusCode = 400
            throw new Error(`That's you!`)
        }

        const { name, email } = user[0]

        res.status(200).send({
            id,
            name,
            email
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}