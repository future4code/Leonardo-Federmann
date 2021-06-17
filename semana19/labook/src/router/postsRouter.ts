import {Router, Request, Response} from 'express'
import {generateId} from '../middlewares/generateId'
import connection from '../data/connection'
import {generateToken, getTokenData} from '../middlewares/authenticator'
import {createHash, compareHash} from '../middlewares/hashManager'
import {authenticationData} from '../model/authenticationData'
import {post} from '../model/posts'
import {getPost} from '../controller/posts/getPost'
import {createPost} from '../controller/posts/createPost'

export const postsRouter = Router()

postsRouter.post('/create', createPost)
postsRouter.get('/:id', getPost) 