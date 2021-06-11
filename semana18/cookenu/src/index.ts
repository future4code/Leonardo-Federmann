import app from './app'
import { changeRole } from './endpoints/changeRole'
import { createRecipe } from './endpoints/createRecipe'
import { deleteRecipe } from './endpoints/deleteRecipe'
import { editRecipe } from './endpoints/editRecipe'
import { followUser } from './endpoints/followUser'
import { getAnotherProfile } from './endpoints/getAnotherProfile'
import { getFeed } from './endpoints/getFeed'
import { getRecipe } from './endpoints/getRecipe'
import { getUserProfile } from './endpoints/getUserProfile'
import { login } from './endpoints/login'
import { signup } from './endpoints/signup'
import { unfollowUser } from './endpoints/unfollowUser'

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/feed', getFeed)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)
app.get('/user/profile', getUserProfile)
app.get('/user/profile/:id', getAnotherProfile)
app.put('/user/change-role', changeRole)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)
app.delete('/recipe/delete/:id', deleteRecipe)
app.put('/recipe/edit/:id', editRecipe)