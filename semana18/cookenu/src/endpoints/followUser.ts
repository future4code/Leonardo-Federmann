import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

export async function followUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.body.userToFollowId as string

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        if (tokenInfo.id === id) {
            res.statusCode = 401
            throw new Error('You cannot follow yourself.')
        }

        const userToFollow = await connection
            .select('name')
            .from('cookenu_users')
            .where({ id })

        if (!userToFollow[0]) {
            res.statusCode = 400
            throw new Error('User not found')
        }

        await connection.insert({
            following_user: tokenInfo.id,
            followed_user: id
        }).into('cookenu_follow_users')

        res.status(200).send({
            message: `You are now following ${userToFollow[0].name}`
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}