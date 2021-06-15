import {Router} from 'express'
import {createTask} from '../controller/task/createTask'
import {getTaskById} from '../controller/task/getTaskById'

export const tasksRouter = Router()

tasksRouter.put('/', createTask)
tasksRouter.get('/:id', getTaskById)