import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

export async function getUserProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }
        const id = tokenInfo.id
        const user = await connection
            .select('id', 'name', 'email')
            .from('cookenu_users')
            .where({ id })

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