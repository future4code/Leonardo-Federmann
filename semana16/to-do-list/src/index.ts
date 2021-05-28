import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connection from './connection'
import { parseCommandLine } from 'typescript'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

//CRIAÇÃO DE USUÁRIO
// body = {
//     "name":"Astro Dev",
//     "nickname": "astrodev",
//     "email": "astro@dev.com"
// } 

app.post('/user', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nickname, email } = req.body

        if (!name || typeof name !== 'string') {
            throw new Error('Favor inserir um nome válido.')
        }
        if (!nickname || typeof nickname !== 'string') {
            throw new Error('Favor inserir um apelido válido.')
        }
        if (!email || typeof email !== 'string') {
            throw new Error('Favor inserir um email válido.')
        }
        if (!email.includes('@')) {
            throw new Error('O @ é obrigatório para o email.')
        }

        await connection.raw(`
        INSERT INTO list_users (name, nickname, email)
        VALUES("${name}", "${nickname}", "${email}");
        `)

        res.status(200).send({
            message: `Usuário ${name} criado com sucesso!`
        })

    } catch (error) {

        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

//BUSCAR USUÁRIO PELA CORRESPONDÊNCIA
// Necessário inserir somente o valor do campo de busca como query param.

app.get('/user', async(req:Request, res:Response):Promise<void>=>{
    try{
        const query = req.query.query as string

        if(!query){
            throw new Error("Favor inserir um texto válido para a busca.")
        }

        const all_users = await connection.raw(`
        SELECT name, nickname, email FROM list_users;
        `)
        const searched_users = all_users[0].filter((task:any)=>{
            return task.name.toLowerCase().includes(query.toLowerCase()) || 
            task.nickname.toLowerCase().includes(query.toLowerCase()) || 
            task.email.toLowerCase().includes(query.toLowerCase())
        })
        res.status(200).send(searched_users)

    }catch(error){
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

//BUSCAR TODOS OS USUÁRIOS
// Nenhuma entrada é necessária.
app.get('/user/all', async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await connection.raw(`
        SELECT id, nickname FROM list_users;
        `)

        res.status(200).send(users[0])
    } catch (error) {
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage,
                users: []
            })
        }
    }
})

//BUSCAR USUÁRIO PELO ID
// Necessário apenas passar o id como path param.

app.get('/user/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await connection.raw(`
            SELECT id, nickname FROM list_users WHERE id=${req.params.id};
        `)

        if (!user[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }

        res.status(200).send(user[0][0])

    } catch (error) {

        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

//ALTERAR INFORMAÇÕES DO USUÁRIO
//Necessário passar o id como path param e um body com as informações que serão atualizadas (nome, apelido e/ou email). Ao menos uma dessas informações deve ser passada no body, mas, partindo desse pressuposto, a escolha de qual informação será alterada é livre.
// body = {
//     "name":"Astro Dev",
//     "nickname": "astrodev",
//     "email": "astro@dev.com"
// } 

app.put('/user/edit/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const { name, nickname, email } = req.body

        const user = await connection.raw(`
            SELECT name, email FROM list_users WHERE id=${req.params.id};
        `)

        if (!user[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }

        if (name === '') {
            throw new Error('Caso deseje alterar o nome do usuário, favor inserir um nome válido.')
        }
        if (nickname === '') {
            throw new Error('Caso deseje alterar o apelido do usuário, favor inserir um apelido válido.')
        }
        if (email === '') {
            throw new Error('Caso deseje alterar o email do usuário, favor inserir um email válido.')
        }
        if (!name && !nickname && !email) {
            throw new Error('Favor inserir ao menos uma informação para atualizar (nome, apelido e/ou email).')
        }

        let query: string = ''
        if (!name && nickname && email) {
            query = `UPDATE list_users 
            SET nickname="${nickname}", email="${email}" 
            WHERE id=${id};
            `
        }
        if (name && !nickname && email) {
            query = `UPDATE list_users 
            SET name="${name}", email="${email}" 
            WHERE id=${id};
            `
        }
        if (name && nickname && !email) {
            query = `UPDATE list_users 
            SET name="${name}", nickname="${nickname}"" 
            WHERE id=${id};
            `
        }
        if (!name && !nickname && email) {
            query = `UPDATE list_users 
            SET email="${email}" 
            WHERE id=${id};
            `
        }
        if (!name && nickname && !email) {
            query = `UPDATE list_users 
            SET nickname="${nickname}" 
            WHERE id=${id};
            `
        }
        if (name && !nickname && !email) {
            query = `UPDATE list_users 
            SET name="${name}"" 
            WHERE id=${id};
            `
        }
        if (name && nickname && email) {
            query = `UPDATE list_users 
            SET name="${name}", nickname="${nickname}", email="${email}" 
            WHERE id=${id};
            `
        }

        await connection.raw(query)
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        })

    } catch (error) {
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

// CRIAR TAREFA
// body = {
//     "title":"Arrumar o carro",
//     "description":"O carro quebrou. Quem pode arrumar?.",
//     "deadline":"28/05/2021",
//     "requester_id":2
// }

app.post('/task', async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, deadline, requester_id } = req.body
        const requester = await connection.raw(`
            SELECT name FROM list_users WHERE id=${requester_id};
        `)

        if (!requester[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }
        if (!title || typeof title !== 'string') {
            throw new Error('Favor inserir um nome válido para a tarefa.')
        }
        if (!description || typeof description !== 'string') {
            throw new Error('Favor inserir uma descrição válida para a tarefa.')
        }
        if (!deadline || typeof deadline !== 'string' || !deadline.includes("/")) {
            throw new Error('Favor inserir uma data limite válida para a realização da tarefa.')
        }
        
        const deadline_array = deadline.split("/")
        const corrected_deadline = `${deadline_array[2]}-${deadline_array[1]}-${deadline_array[0]}`
        const today = new Date().toISOString().split("T")[0]

        if (new Date(corrected_deadline).getTime() < new Date(today).getTime()) {
            throw new Error('Favor inserir uma data futura ou a data de hoje como limite de realização da tarefa')
        }

        await connection.raw(`
        INSERT INTO list_tasks (title, description, deadline, requester_id)
        VALUES("${title}", "${description}", "${corrected_deadline}", "${requester_id}");
        `)

        res.status(200).send({
            message: `tarefa ${title} criada com sucesso!`
        })

    } catch (error) {
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

// BUSCAR TAREFA CRIADA POR UM USUÁRIO

app.get('/task', async (req: Request, res: Response): Promise<void> => {
    try {
        const creatorUserId = req.query.creatorUserId

        const creatorUser = await connection.raw(`
            SELECT name FROM list_users WHERE id=${creatorUserId};
        `)

        if (!creatorUserId) {
            throw new Error('Favor inserir o id de um usuário.')
        }
        if (!creatorUser[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }

        const tasks_info = await connection.raw(`
        SELECT list_tasks.id AS "taskId", title, description, deadline AS "limitDate", status, list_users.id AS "creatorUserId", list_users.nickname AS "creatorUserNickname"
        FROM list_users JOIN list_tasks
        ON list_users.id=list_tasks.requester_id
        WHERE list_users.id=${creatorUserId};
        `)

        tasks_info[0].forEach((task:any) => {
            const deadline_array = new Date(task.limitDate).toISOString().split("T")[0].split("-")
            const corrected_deadline = `${deadline_array[2]}/${deadline_array[1]}/${deadline_array[0]}`
            task.limitDate = corrected_deadline
        })

        res.status(200).send(tasks_info[0])

    } catch (error) {
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage,
                tasks:[]
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

// ATRIBUIR RESPONSÁVEL A UMA TAREFA

app.post('/task/responsible', async(req:Request, res:Response):Promise<void>=>{
    try{
        const {taskId, userId} = req.body
        if(!taskId){
            throw new Error('Favor inserir um ID válido de uma tarefa.')
        }
        const task = await connection.raw(`
            SELECT title FROM list_tasks WHERE id=${taskId};
        `)
        if (!task[0][0]) {
            throw new Error('Não existe uma tarefa com o ID inserido.')
        }

        if(!userId){
            throw new Error('Favor inserir um ID válido de um usuário.')
        }
        const user = await connection.raw(`
            SELECT name FROM list_users WHERE id=${userId};
        `)
        if (!user[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }

        await connection.raw(`
        INSERT INTO assigned_users
        VALUES(${userId}, ${taskId});
        `)

        res.status(200).send({
            message: 'Usuário designado com sucesso!'
        })
        
    }catch(error){
        if (error.sqlMessage === 'connect ETIMEDOUT') {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage,
                tasks:[]
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

// BUSCAR TAREFA PELO ID
// Necessário somente passar o id da tarefa como path param.

app.get('/task/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id

        const user = await connection.raw(`
            SELECT name, email FROM list_users WHERE id=${req.params.id};
        `)

        if (!user[0][0]) {
            throw new Error('Não existe um usuário com o ID inserido.')
        }

        const task_info = await connection.raw(`
        SELECT list_tasks.id AS "taskId", title, description, deadline AS "limitDate", status, list_users.id AS "creatorUserId", list_users.nickname AS "creatorUserNickname"
        FROM list_users JOIN list_tasks
        ON list_users.id=list_tasks.requester_id
        WHERE list_tasks.id=${id};
        `)

        const deadline_array = new Date(task_info[0][0].limitDate).toISOString().split("T")[0].split("-")
        const corrected_deadline = `${deadline_array[2]}/${deadline_array[1]}/${deadline_array[0]}`
        task_info[0][0].limitDate = corrected_deadline

        res.status(200).send(task_info[0][0])
    } catch (error) {
        if (error.sqlMessage === "connect ETIMEDOUT") {
            res.status(500).send({
                message: 'Ops! Parece que houve um problema com a sua internet. Por favor, tente novamente mais tarde'
            })
        }

        if (error.sqlMessage) {
            res.status(500).send({
                message: error.sqlMessage
            })
        }

        res.status(400).send({
            message: error.message
        })
    }
})

app.listen(process.env.DB_PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.DB_PORT}`)
})

