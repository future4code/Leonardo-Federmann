import app from "./app"
import editUser from './endpoints/editUser'
import {createUser} from './endpoints/createUser'
import {login} from './endpoints/login'
import {getUser} from './endpoints/getUser'

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)
app.post('/user/login', login)
app.get('/user/profile', getUser)