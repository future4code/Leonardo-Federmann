import { Request, Response } from 'express'
import connection from '../connection'
import { getTokenData } from '../services/authenticator'

export async function unfollowUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const id = req.body.userToUnfollowId as string

        const tokenInfo = getTokenData(token)
        if (!tokenInfo) {
            res.statusCode = 401
            throw new Error('Unauthorized')
        }

        const userToUnfollow = await connection
            .select('name')
            .from('cookenu_users')
            .where({ id })

        if (!userToUnfollow[0]) {
            res.statusCode = 400
            throw new Error('User not found')
        }

        const following_user = tokenInfo.id
        const followed_user = id

        const isThisUserBeingFollowed = await connection('cookenu_follow_users')
            .where({ following_user, followed_user })
        if (!isThisUserBeingFollowed[0]) {
            res.statusCode = 400
            throw new Error(`You are not following ${userToUnfollow[0].name}.`)
        }

        await connection.delete()
            .from('cookenu_follow_users')
            .where({ following_user, followed_user })

        res.status(200).send({
            message: `Success! You are not following ${userToUnfollow[0].name} anymore.`
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}