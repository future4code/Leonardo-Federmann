import transporter from '../transporter'
import {Request, Response} from 'express'

export async function sendEmail (req:Request, res:Response):Promise<void>{
    try{
        const {title, text} = req.body
        const info = await transporter.sendMail({
            from:"<leonardo.dev.practice@gmail.com>",
            to:["leonardo.dev.practice@gmail.com", "g6e8k2i3m1o7e5d9@labenualunos.slack.com"],
            subject:"DESAFIO DA AULA DE SERVIÇOS EM BACKEND",
            text: `${title} - ${text}`,
            html:`<h1>${title}</h1><p>${text}</p>`
        })
        res.status(200).send({
            message: "Email enviado com sucesso.",
            text
        })
    }catch(error){
        res.send({
            error: error.message
        })
    }
}