import { insertUser } from '../data/insertUser'
import { generateId } from '../middlewares/generateId'
import { generateToken } from '../middlewares/authenticator'
import { createHash } from '../middlewares/hashManager'

export async function signupBusiness(
    name: string,
    email: string,
    password: string,
    role: string
): Promise<string> {
    if (!name) {
        throw new Error('Please insert your name.')
    }

    if (!email) {
        throw new Error('Please insert your email.')
    }

    if (!password) {
        throw new Error('Please insert your password.')
    }

    if (!role) {
        throw new Error('Please insert your role.')
    }

    if (role !== 'ADMIN' && role !== 'NORMAL') {
        throw new Error('Please insert a valid role (NORMAL or ADMIN).')
    }

    const id: string = generateId()
    const token: string = generateToken({ id, role })
    const hash = createHash(password)

    await insertUser(
        id,
        name,
        email,
        hash,
        role
    )
    return token
}