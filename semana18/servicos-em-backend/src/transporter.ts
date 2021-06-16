import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter:any = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {cipher:"SSLv3"}
})

export default transporter