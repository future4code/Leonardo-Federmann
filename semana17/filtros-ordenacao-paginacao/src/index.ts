import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connection from './connection'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

app.get('/user', getAllUsers)

app.listen(process.env.DB_PORT, ()=>{
    console.log(`Server is running at http://localhost:${process.env.DB_PORT}...`)
})