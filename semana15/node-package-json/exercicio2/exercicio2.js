const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])
const red = '\u001b[31m';
const green = '\u001b[32m'

if(!operation){
    console.log(red, `Insira uma operação válida`)
}else if(!firstNumber){
    console.log(red, `Insira números válidos`)
}else if (!secondNumber){
    console.log(red, `Não foi inserido um segundo número.`)
}else{
    switch (operation){
        case 'add':
            console.log(green, `Resultado: ${firstNumber + secondNumber}`)
            break
        case 'sub':
            console.log(green, `Resultado: ${firstNumber - secondNumber}`)
            break
        case 'mult':
            console.log(green, `Resultado: ${firstNumber*secondNumber}`)
            break
        case 'div':
            console.log(green, `Resultado: ${firstNumber/secondNumber}`)
            break
        default:
            console.log(red, `Operação inválida`)
    }
}