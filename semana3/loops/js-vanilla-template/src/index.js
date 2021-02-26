//ATIVIDADE SOBRE LOOPS

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1-)
//O código está declarando uma variável "valor" igual e 0 e, depois, somando a ela os valores
//0, 1, 2, 3 e 4, um de cada vez. Com isso, o resultado impresso será 10.

//-----------------------------------------------------------------------------------------------

//2-)

//a)
//A mensagem impressa será:
//19
//21
//23
//25
//27
//30

//b)
//Somente o for of não será suficiente para acessar o índice de um valor na array, pois esse comando
//utilizada os valores em si da array, não seus índices. Uma sugestão para acessar seus índices (utilizando,
//além de for of, também o for e o if) seria:
//for(n of lista){
    //for(let i=0; i<lista.length; i++){
        //if(n===lista[i]){
            //console.log(i)
        //}
    //}
//}

//-----------------------------------------------------------------------------------------------

//DESAFIO DE INTERPRETAÇÃO DE CÓDIGO

//O resultado impresso no console seria:
//0
//00
//000
//0000

//-----------------------------------------------------------------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
console.log('EXERCÍCIOS DE ESCRITA DE CÓDIGO')
console.log('')

//1-)
console.log('1-)')
console.log('')

//Para testar o programa, utilizei o mesmo array do exemplo fornecido:
let original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
console.log('a)')

for (let i = 0; i < original.length; i++) {
    console.log(original[i])
}

console.log('')

//b)
console.log('b)')

for (let i = 0; i < original.length; i++) {
    console.log(original[i] / 10)
}

console.log('')

//c)
console.log('c)')

let pares = []
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i])
    }
}
console.log(pares)

console.log('')

//d)
console.log('d)')

let frase = []
for (let i = 0; i < original.length; i++) {
    frase.push('O elemento de índice ' + i + ' é ' + original[i])
}

//Para melhor visualização, imprimi o array da mesma forma como no item a,
//em vez de somente usar console.log(frase).
for (let i = 0; i < frase.length; i++) {
    console.log(frase[i])
}

console.log('')

//e)
console.log('e)')

let maior = menor = original[0]
for (n of original) {
    if (n > maior) {
        maior = n
    }
}
for (n of original) {
    if (n < menor) {
        menor = n
    }
}
console.log('O maior número da array é ' + maior + ' e o menor é ' + menor + '.')

//-----------------------------------------------------------------------------------------------

console.log('')

//DESAFIOS)
console.log('DESAFIOS')

console.log('')

//1-)
console.log('1-)')

//Código para inserir os números e verificar se o número a ser adivinhado é válido
let numero = Number(prompt('Insira um número para o seu amigo adivinhar, depois passa o computador para ele =D'))
while(!isNaN(numero)===false){
    numero = Number(prompt('Insira um número válido para começar o jogo:'))
}
let tent = Number(prompt('Vamos ver se você é bom em ler mentes hehehe digite aqui sua primeira tentativa:'))
let numeroTentativas=0

//Código para o jogo em si:
while(tent!==numero){
    while(!isNaN(tent)===false){
        tent = Number(prompt('Assim não vale! Insira um número válido hehehe'))
    }
    if(numero<tent){
        console.log('O número chutado foi: ' + tent)
        console.log('Não foi dessa vez! O número é MENOR que isso. Tente de novo! =D')
        console.log('')
        tent=Number(prompt('Não foi dessa vez! O número é MENOR que isso. Tente de novo! =D'))
    } else{
        console.log('O número chutado foi: ' + tent)
        console.log('Não foi dessa vez! O número é MAIOR que isso. Tente de novo! =D')
        console.log('')
        tent=Number(prompt('Não foi dessa vez! O número é MAIOR que isso. Tente de novo! =D'))
    }
    numeroTentativas++
}
numeroTentativas++
console.log('Parabéns! Você acertou! =D')
console.log('O número que seu amigo digitou era ' + tent + ' e você acertou em ' + numeroTentativas + ' tentativas.')

console.log('')

//-----------------------------------------------------------------------------------------------

//2-)
console.log('2-)')

// Código para inserir os números:
numero = Math.floor(Math.random() * 100) + 1
tent = Number(prompt('Eu (o computador, prazer) escolhi um número! Agora você precisa adivinhar qual é hehehe digite aqui sua primeira tentativa:'))
numeroTentativas = 0

// Código para o jogo em si:
console.log('Eu (o computador, prazer) escolhi um número! Agora você precisa adivinhar qual é hehehe digite aqui sua primeira tentativa:')
console.log('')
while (tent !== numero) {
    while (!isNaN(tent) === false) {
        tent = Number(prompt('Assim não vale! Insira um número válido hehehe'))
    }
    if (numero < tent) {
        console.log('O número chutado foi: ' + tent)
        console.log('Não foi dessa vez! O número é MENOR que isso. Tente de novo! =D')
        console.log('')
        tent = Number(prompt('Não foi dessa vez! O número é MENOR que isso. Tente de novo! =D'))
    } else {
        console.log('O número chutado foi: ' + tent)
        console.log('Não foi dessa vez! O número é MAIOR que isso. Tente de novo! =D')
        console.log('')
        tent = Number(prompt('Não foi dessa vez! O número é MAIOR que isso. Tente de novo! =D'))
    }
    numeroTentativas++
}
numeroTentativas++
console.log('Parabéns! Você acertou! =D')
console.log('O número que eu escolhi era ' + tent + ' e você acertou em ' + numeroTentativas + ' tentativas.')

//REFLEXÃO A RESPEITO: uma vez compreendida a lógica do Math.random, Math.floor e Math.ceil, foi fácil realizar a alteração.
//O difícil e trabalhoso foi entendê-la. Passei um tempo lendo o site fornecido e outros para isso, mas agora não vejo problemas
//em aplicá-los. A lógica é: Math.random adotará um número real aleatório entre 0 e 1, incluindo o 0 e excluindo o 1.
//Multiplicando esse valor por 100, o intervalo aumentará para de 0 a 100. Incluindo o Math.floor, a variável adotará o número
//inteiro exatamente menor que o valor sorteado, alterando o intervalo para de 0 a 99. Basta, então, somar 1 ao número para que
//o intervalo seja de 1 a 100.