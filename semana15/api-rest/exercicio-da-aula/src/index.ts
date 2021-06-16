import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 1
app.get('/users/all', (req: Request, res: Response) => {
  res.status(200).send(users)
  //Neste endpoint, optei por não tratar erros com try e catch, pois não vejo necessidade. 
})

//a) O método utilizado é o GET, que se refere à busca de dados. 
//b) A entidade principal será "users", que se refere ao conjunto de endpoints referentes à busca de usuários. Utilizei também um segundo endpoint, "all", indicando que todos os usuários serão exibidos. 

// EXERCÍCIO 2

app.get('/users/search/type', (req: Request, res: Response) => {
  try {
    const searchedType = req.query.type as string

    if (!searchedType) {
      throw new Error("Please search a type.")
    }

    const correctedSearchedType = searchedType.toUpperCase() 

    if (correctedSearchedType !== 'ADMIN' && correctedSearchedType !== 'NORMAL') {
      throw new Error('Please search a valid type (ADMIN or NORMAL).')
    }

    const searchedUsers: User[] = users.filter((user) => user.type === correctedSearchedType)
    res.status(200).send(searchedUsers)

  } catch (error) {
    res.status(400).send(error.message)
  }
})

//a) Utilizei o type como query params de modo a não confundir o endpoint com outros que eu ainda possa vir a criar nos próximos exercícios. Ademais, o type não poderia ser passado dentro de um body, visto que o método GET não recebe bodies, restando somente as opções de query params e path params.

//b) Para essa validação, inseri duas condicionais: uma verificando se o query "type" realmente está sendo passado e outra averiguando se ele possui um dos valores aceitáveis (ADMIN e NORMAL). Contudo, o uso do Enum para restringir as opções possíveis do "type" também seria um ótimo caminho. 

// EXERCÍCIO 3

app.get('/users/search/name/:name', (req:Request, res:Response)=>{
  try{
    const searchedName = req.params.name as string
    const correctedSearchedName = searchedName.toLowerCase()
    let i=0
    users.forEach((user)=>{
      if(user.name.toLowerCase()===correctedSearchedName){
        i+=1
      }
    })
    if(i===0){
      throw new Error('Name not found.')
    }
    const searchedUsers:User[] = users.filter((user)=>user.name.toLowerCase()===correctedSearchedName)
    res.status(200).send(searchedUsers)
  }catch(error){
    res.status(400).send(error.message)
  }
})

//a) Acredito que o tipo de envio de parâmetro seja por meio de path params ou query params (como havia utilizado query params no exercício 2, procurei usar path params neste).

//b) A mensagem já está sendo mostrada.

// EXERCÍCIO 4

app.post('/users/add', (req:Request, res:Response)=>{
  try{
    const {name, email, type, age} = req.body
    if(!name || !email || !type || !age){
      throw new Error('Please insert the requested information (name, email, type and age).')
    }
    const correctedType = type.toUpperCase()
    if(correctedType!=='ADMIN' && correctedType!=='NORMAL'){
      throw new Error('Please enter a valid type (ADMIN or NORMAL).')
    }
    const id:number = users[users.length-1].id + 1
    const newUser:User = {
      id,
      name, 
      email,
      type: correctedType,
      age
    }
    users.push(newUser)
    res.status(200).send({
      message: `${name} added to users list.`,
      newUser: newUser
    })
  }catch(error){
    res.status(400).send({
        message: error.message
    })
  }
})

//a) Realizei a alteração para PUT e, logo após, retornei para POST. Não houve alterações nas funcionalidades do endpoint. 

//b) Por questão de boas práticas, o método PUT é usado para alterar informações que já existem no banco de dados, enquanto o POST é usado para acrescentar novas informações. Por conseguinte, para este endpoint, o correto será usar o POST, não o PUT. 

// ENDPOINT DE TESTE
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!!!!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
