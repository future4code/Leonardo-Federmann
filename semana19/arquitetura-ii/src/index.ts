import { app } from "./controller/app"
import { userRouter} from './routes/userRoutes'
import {tasksRouter} from './routes/tasksRouter'

app.use('/users', userRouter)
app.use('/task', tasksRouter)

