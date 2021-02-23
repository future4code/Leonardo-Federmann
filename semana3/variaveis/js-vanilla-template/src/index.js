//EXERCÍCIOS DE INTERPRETAÇÃO

//1- Os valores impressos serão, respectivamente:
//10
//105

//2- O valor impresso será: 101010

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1-)

let nome
let idade
console.log('A primeira variável é do tipo', typeof nome, 'e a segunda, do tipo', typeof idade)

//RESPOSTA DA LETRA D: o valor impresso foi undefined, próprio de variáveis cujo valor ainda não foi atribuído (caso das duas variáveis declaradas).
nome = prompt('Qual é seu nome?')
idade = prompt('Prazer! Agora me diz: quantos anos você tem?')
console.log('Agora, a primeira variável é do tipo', typeof nome, 'e a segunda, do tipo', typeof idade)
//RESPOSTA DA LETRA E: Agora, ambas as variáveis passaram a ser do tipo string, o que é completamente cabível para a variável nome.
//Contudo, a variável idade deveria ser do tipo number. Assumo portanto que, ao permitir que o usuário insira um valor com o uso do prompt, 
//tal valor será inevitavelmente um texto. Talvez haja outro comando utilizado para a inserção de números.
console.log('Olá', nome, ', você tem', idade, 'anos')
console.log('')

//2-)

//Declaração de variáveis
let logr = prompt('Fala jovem! Vamos começar: conte para a gente em qual tipo de logradouro você mora (rua, avenida...)')
let nomeLogr = prompt('Show! Agora nos conte o nome do seu logradouro:')
let numero = prompt('Falta pouco! Coloque agora o número da sua residência:')
let complemento = prompt('Caso tenha algum complemento (apartamento, bloco, bairro e etc), pode colocar aqui. Se não tiver, pode deixar em branco.')
let cor = prompt('Por fim, nos conte a sua cor favorita. =)')

// //Impressão dos valores na disposição solicitada
console.log('Obrigado! As suas respostas foram:')
console.log('1. Qual o seu endereço?')
console.log('Resposta:', logr, nomeLogr, numero, complemento)
console.log('')
console.log('2. Qual a sua cor favorita?')
console.log('Resposta:', cor)

console.log('')

//3-)

let comidas = ['culinária árabe', 'culinária japonesa', 'açaí', 'batata rústica', 'culinária mexicana']
console.log(comidas)
console.log('Essas são minhas comidas favoritas:')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
console.log('')
comidas[1] = prompt('Amigão ou amigona, como eu gosto muito de você, me fala uma de suas comidas favoritas que eu vou atualizar a minha lista:')
console.log('Show! Minha nova lista de comidas favoritas é:')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

console.log('')
//4-)

let perguntas = ['Você está lendo um livro?', 'Você está fazendo um curso de programação?', 'Você mora no Himalaia?']
let respostas = [true, true, false]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])

