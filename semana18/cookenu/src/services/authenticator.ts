import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types'
import dotenv from 'dotenv'

dotenv.config()

export function generateToken(payload: authenticationData): string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: '1d' }
    )
}

export function getTokenData(token: string): authenticationData | null {
    try {
        const { id } = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData
        return { id }
    } catch (error) {
        return null
    }
}