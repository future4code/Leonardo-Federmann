import app from './controller/app'
import { postsRouter } from "./router/postsRouter"
import { usersRouter } from "./router/usersRouter"

app.use('/users', usersRouter)
app.use('/posts', postsRouter)