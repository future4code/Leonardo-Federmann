import { Request, Response } from 'express'
import connection from '../connection'
import { generateToken } from '../services/authenticator'
import { generateId } from '../services/generateId'
import { generateHash } from '../services/hashManager'

export async function signup(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body
        let role: string = req.body.role

        if (!name) {
            res.statusCode = 400
            throw new Error('Please enter your name.')
        }

        if (!email) {
            res.statusCode = 400
            throw new Error('Please enter your e-mail.')
        }

        if (!password) {
            res.statusCode = 400
            throw new Error('Please enter a password.')
        }

        if (password.length < 6) {
            res.statusCode = 400
            throw new Error('Your password must have at least 6 characters.')
        }

        if (!email.includes('@')) {
            res.statusCode = 400
            throw new Error('Please enter a valid email (with @).')
        }

        if (!role) {
            role = 'BEGINNER'
        }else{
            role = role.toUpperCase()
        }

        if (role !== 'BEGINNER' && role !== 'INTERMEDIATE' && role !== 'CHEF') {
            res.statusCode = 400
            throw new Error('If you wish to insert a role, please insert a valid one (BEGINNER, INTERMEDIATE or CHEF).')
        }

        const allExistingEmails = await connection.select('email').from('cookenu_users')
        allExistingEmails.forEach((existingEmail) => {
            if (existingEmail.email === email) {
                res.statusCode = 400
                throw new Error('This e-mail is already registered.')
            }
        })

        const id = generateId()
        const hash = generateHash(password)
        const token = generateToken({ id, role })

        await connection.insert({ id, name, email, password: hash }).into('cookenu_users')

        res.status(200).send({
            message: `User ${name} was successfully registered.`,
            token
        })

    } catch (error) {
        res.send({
            error: error.message
        })
    }
}