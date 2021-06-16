import app from './controller/app'
import {signup} from './controller/signup'
import {login} from './controller/login'
import { getUsers } from './controller/getUsers'
import { deleteUser } from './controller/deleteUser'

app.post('/signup', signup)
app.post('/login', login)
app.get('/all', getUsers)
app.delete('/delete/:id', deleteUser)
