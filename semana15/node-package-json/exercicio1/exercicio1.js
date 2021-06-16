//a) Para acessar tais parâmetos, é utilizado o comando process.argv, que cria uma array cujo primeiro item será o caminho do Node.js na máquina local, o segundo será o caminho do arquivo nque está sendo editado e os demais se referem, cada um, a um parâmetro passado ao rodar o comando node nomeDoArquivo. 

//DESAFIO 2: tornar coloridos os textos impressos no terminal
const red = '\u001b[31m';
const blue = '\u001b[34m';
const green = '\u001b[32m'

//b)

const showNameAndAge = (name, age) =>{
    name && age && console.log(blue, `Olá ${name}! Você tem ${age} ano(s).`)

    //c)
    const newAge = Number(age) + 7
    name && newAge && name && age && console.log(green, `Olá ${name}! Você tem ${age} ano(s) e, daqui 7 anos, terá ${newAge} anos.`)
}

//DESAFIO 1: verificações
if(!process.argv[2]){
    console.log(red, `Insira um nome e uma idade válidos.`)
}else if(!process.argv[3]){
    console.log(red, `Insira uma idade válida.`)
}else{
    showNameAndAge(process.argv[2], process.argv[3])
}