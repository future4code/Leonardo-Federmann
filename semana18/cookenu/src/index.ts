import app from './app'
import { getAnotherProfile } from './endpoints/getAnotherProfile'
import { getUserProfile } from './endpoints/getUserProfile'
import { login } from './endpoints/login'
import {signup} from './endpoints/signup'

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/profile', getUserProfile)
app.get('/user/profile/:id', getAnotherProfile)