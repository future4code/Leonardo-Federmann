import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

enum ADD_OR_PAY {
    ADD = "add",
    PAY = "pay"
}

type bill = {
    value: number,
    date: string,
    description: string,
}

type customer = {
    name: string,
    cpf: number,
    birthdate: string,
    balance: number,
    extract: bill[]
}

const customers: customer[] = [
    {
        name: 'Alice',
        cpf: 12345678900,
        birthdate: '1995-07-20',
        balance: 2000,
        extract: [
            {
                value: -500,
                date: '2020-12-20',
                description: 'Presentes de Natal.',
            },
            {
                value: -250,
                date: '2021-05-21',
                description: 'Ifood'
            }
        ]
    },
    {
        name: 'Vision',
        cpf: 98765432100,
        birthdate: '2000-07-15',
        balance: 5000,
        extract: [
            {
                value: -500,
                date: '2021-05-21',
                description: 'Manutenção do meu sistema.',
            },
            {
                value: -250,
                date: '2018-04-05',
                description: 'Viagem espacial.'
            },
            {
                value: -300,
                date: '2019-008-07',
                description: 'Encontro com a Wanda.'
            }
        ]
    }
]

//GET ALL CUSTOMERS
// Nenhuma entrada é necessária.
app.get('/customers/all', (req: Request, res: Response) => {
    res.status(200).send(customers)
})

//ADD NEW CUSTOMER
//Para a entrada, somente é necessário um body, conforme o exemplo a seguir:
// body = {
//     name: "Tony Startk",
//     cpf: 99999999999,
//     birthdate: "1937-07-15"
// }

app.post('/customers/new', (req: Request, res: Response) => {
    try {
        const name: string = req.body.name
        const cpf: number = req.body.cpf
        const birthdate: string = req.body.birthdate

        if (!name || !cpf || !birthdate) {
            throw new Error("Informações incompletas. Favor inserir: nome, CPF e data de nascimento.")
        }

        if (typeof name !== 'string' || typeof cpf !== 'number' || typeof birthdate !== 'string') {
            throw new Error("Favor adicionar informações válidas.")
        }

        const birthYear = new Date(birthdate).getTime() / (1000 * 60 * 60 * 24 * 30 * 12)
        const currentYear = new Date().getTime() / (1000 * 60 * 60 * 24 * 30 * 12)

        if (currentYear - birthYear < 18) {
            throw new Error("Os clientes devem ter no mínimo 18 anos.")
        }

        customers.forEach((customer) => {
            if (customer.cpf === cpf) {
                throw new Error("Já existe um cliente com este CPF.")
            }
        })

        const newCustomer: customer = {
            name,
            cpf,
            birthdate,
            balance: 0,
            extract: []
        }

        customers.push(newCustomer)
        res.status(200).send({
            message: "Cliente adicionado com sucesso!",
            newCustomer
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

// EXECUTE ALL THE TRANSACTIONS SCHEDULED FOR TODAY
// Nenhuma entrada é necessária.
app.put("/customers/execute-day-transitions", (req: Request, res: Response) => {
    const today = new Date().toISOString().split("T")[0]
    customers.forEach((customer) => {
        customer.extract.forEach((transaction) => {
            if (transaction.date === today) {
                customer.balance += transaction.value
            }
        })
    })
    customers.forEach((customer) => {
        const newExtract = customer.extract.filter((transaction) => transaction.date !== today)
        customer.extract = newExtract
    })
    res.status(200).send({
        message: "Transações do dia realizadas com sucesso!"
    })
})

//TRANSACTION AMONG CUSTOMERS
//Para a entrada, somente um body é necessário, conforme o exemplo a seguir:
// body = {
//     senderName: "Alice",
//     senderCpf: 12345678900,
//     receiverName: "Vision",
//     receiverCpf: 98765432100,
//     value: 300,
//     date: "2021-09-06"
// }

app.post('/customers/transaction', (req: Request, res: Response) => {
    try {
        const { senderName, senderCpf, receiverName, receiverCpf, value, date } = req.body

        if (!senderName ||
            !senderCpf ||
            !receiverName ||
            !receiverCpf ||
            !value ||
            !date) {
            throw new Error("Favor inserir todos os valores solicitados (nome e CPF do rementente, nome e CPF do destinatário, valor e data da transação).")
        }
        if (
            typeof senderName !== 'string' ||
            typeof senderCpf !== 'number' ||
            typeof receiverName !== 'string' ||
            typeof receiverCpf !== 'number' ||
            typeof value !== 'number'
        ) {
            throw new Error("Favor inserir valores válidos.")
        }

        if (value < 0) {
            throw new Error("Favor inserir uma quantia válida para ser transferida.")
        }

        const sender = customers.find(c => c.cpf === senderCpf)
        const receiver = customers.find(c => c.cpf === receiverCpf)

        if (!sender) {
            if (!customers.find(c => c.name === senderName)) {
                throw new Error("Cliente que fará a transação não possui conta.")
            } else {
                throw new Error("CPF incorreto do cliente que fará a transação.")
            }
        }

        if (!receiver) {
            if (!customers.find(c => c.name === receiverName)) {
                throw new Error("Cliente a ser creditado não possui conta.")
            } else {
                throw new Error("CPF incorreto do cliente a ser creditado.")
            }
        }

        if (sender.name !== senderName) {
            throw new Error("Nome incorreto do cliente que fará a transação.")
        }

        if (receiver.name !== receiverName) {
            throw new Error("Nome incorreto do cliente a ser creditado.")
        }

        if (value > sender.balance) {
            throw new Error("O valor a ser pago supera seu saldo, que não pode ser negativo.")
        }

        const today = new Date()
        let transactionDate = new Date(date)
        if (today.toISOString().split("T")[0] === transactionDate.toISOString().split("T")[0]) {
            transactionDate = today
        }

        if (today.getTime() > transactionDate.getTime()) {
            throw new Error("Favor inserir uma data futura ou a data de hoje.")
        }

        //Por algum motivo, a validação abaixo (que visa a averiguar se a data inserida possui formato adequado) não está funcionando. 
        if (!transactionDate) {
            throw new Error("Favor inserir uma data válida.")
        }

        let senderBalance
        let receiverBalance
        customers.forEach((customer) => {
            if (today === transactionDate) {
                if (customer.cpf === senderCpf) {
                    customer.balance -= value
                    senderBalance = customer.balance
                } else if (customer.cpf === receiverCpf) {
                    customer.balance += value
                    receiverBalance = customer.balance
                }
            } else {
                if (customer.cpf === senderCpf) {
                    customer.extract.push({
                        value: -value,
                        date,
                        description: "Transferência a ser realizada.",
                    })
                } else if (customer.cpf === receiverCpf) {
                    customer.extract.push({
                        value,
                        date,
                        description: "Valor a ser recebido por transferência.",
                    })
                }
            }

        })

        if (today === transactionDate) {
            res.status(200).send({
                message: "Transferência realizada com sucesso!",
                sender: {
                    name: senderName,
                    balance: senderBalance
                },
                receiver: {
                    name: receiverName,
                    balance: receiverBalance
                }
            })
        } else {
            res.status(200).send({
                message: "Transferência agendada com sucesso!",
                date,
                value,
                sender: senderName,
                receiver: receiverName
            })
        }

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

//GET CUSTOMER'S BALANCE
// Para a entrada, é necessário inserir o CPF como path param e um body contendo somente o nome do cliente:
// body = {
//     name: "Alice"
// }
app.get('/customers/:cpf', (req: Request, res: Response) => {
    try {
        const name: string = req.body.name
        const cpf: number = Number(req.params.cpf)

        if (!name || !cpf) {
            throw new Error("Favor inserir um nome e um CPF.")
        }

        const currentCustomer = customers.find(c => c.cpf === cpf)

        if (!currentCustomer) {
            if (!customers.find(c => c.name === name)) {
                throw new Error("Cliente não possui conta.")
            } else {
                throw new Error("CPF incorreto.")
            }
        }

        if (currentCustomer.name !== name) {
            throw new Error("Nome ou CPF incorreto.")
        }

        currentCustomer && res.status(200).send({
            customer: currentCustomer.name,
            cpf: currentCustomer.cpf,
            balance: currentCustomer.balance
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

//ADD MONEY TO BALANCE OR PAY BILL
//Para a entrada, é necessário inserir o CPF como path params e um body com as informações de nome, valor da operação, data e opção de pagar conta ou adicionar valor ao saldo, conforme exemplo a seguir:
// body = {
//     name:"Alice",
//     value: 2000,
//     date: "2021-05-21",
//     addOrPay: "pay"
// }

//OBS: Elaborei somente um endpoint para adicionar um valor ao saldo do cliente e pagar uma conta, pois, caso fosse elaborado um endpoint para cada uma dessas funcionalidades, ambos seriam demasiadamente parecidos. Para diferenciar ambas as operações, adicionei uma variável "addOrPay", cujo valor deverá ser passado no body da requisição e deve ser igual a "add" ou "pay" (conforme o enum no início deste arquivo).

app.put('/customers/add-balance/:cpf', (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const cpf = Number(req.params.cpf)
        const value = req.body.value
        const date = req.body.date
        const addOrPay: ADD_OR_PAY | undefined = req.body.addOrPay

        if (addOrPay !== "add" && addOrPay !== "pay") {
            throw new Error("Favor selecionar se deseja adicionar o valor ao extrato ou pagar uma conta.")
        }

        if (!name || !cpf) {
            throw new Error("Favor inserir um nome e um CPF.")
        }
        if (!value) {
            throw new Error("Favor inserir um valor para adicionar ao saldo.")
        }
        if (!date) {
            throw new Error("Favor inserir uma data.")
        }
        if (typeof value !== 'number') {
            throw new Error("Favor inserir uma quantidade válida para adicionar ao saldo.")
        }

        const currentCustomer = customers.find(c => c.cpf === cpf)

        if (!currentCustomer) {
            if (!customers.find(c => c.name === name)) {
                throw new Error("Cliente não possui conta.")
            } else {
                throw new Error("CPF incorreto.")
            }
        }

        if (currentCustomer.name !== name) {
            throw new Error("Nome ou CPF incorreto.")
        }

        if (addOrPay === "pay" && value > currentCustomer.balance) {
            throw new Error("O valor a ser pago supera seu saldo, que não pode ser negativo.")
        }

        const today = new Date()
        let transactionDate = new Date(date)
        if (today.toISOString().split("T")[0] === transactionDate.toISOString().split("T")[0]) {
            transactionDate = today
        }

        if (today.getTime() > transactionDate.getTime()) {
            throw new Error("Favor inserir uma data futura ou a data de hoje.")
        }
        //Por algum motivo, a validação abaixo (que visa a averiguar se a data inserida possui formato adequado) não está funcionando. 
        if (!transactionDate) {
            throw new Error("Favor inserir uma data válida.")
        }

        customers.forEach((customer) => {
            if (customer.cpf === cpf) {
                if (today === transactionDate) {
                    addOrPay === "add" ? customer.balance += value : customer.balance -= value
                    res.status(200).send({
                        message: addOrPay==='add' ? "Saldo adicionado com sucesso!" : "Conta paga com sucesso!",
                        name: customer.name,
                        cpf: customer.cpf,
                        balance: customer.balance
                    })
                } else {
                    customer.extract.push({
                        value: addOrPay === "add" ? value : -value,
                        date,
                        description: "Acréscimo ao saldo."
                    })
                    res.status(200).send({
                        message: "Operação agendada com sucesso!",
                        extract: customer.extract,
                    })
                }
            }
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.listen(3000, () => {
    console.log('Server is running as http://localhost:3000')
})