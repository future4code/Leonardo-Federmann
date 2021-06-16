import app from "./app"
import editUser from './endpoints/editUser'
import {createUser} from './endpoints/createUser'
import {login} from './endpoints/login'
import {getUser} from './endpoints/getUser'
import dotenv from 'dotenv'
import { deleteUser } from "./endpoints/deleteUser"

dotenv.config()

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getUser)
app.put('/user/edit/:id', editUser)
app.delete('/user/delete/:id', deleteUser)
