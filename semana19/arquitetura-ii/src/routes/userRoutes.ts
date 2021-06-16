import {Router} from 'express'
import {signup} from '../controller/user/signup'
import {login} from '../controller/user/login'

export const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)