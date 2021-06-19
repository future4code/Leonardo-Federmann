import {Router, Request, Response} from 'express'
import {generateId} from '../middlewares/generateId'
import connection from '../data/connection'
import {generateToken, getTokenData} from '../middlewares/authenticator'
import {createHash, compareHash} from '../middlewares/hashManager'
import {authenticationData} from '../model/authenticationData'
import {user} from '../model/users'
import {signup} from '../controller/users/signup'
import {login} from '../controller/users/login'

export const usersRouter = Router()

usersRouter.post('/signup', signup)
usersRouter.post('/login', login) 