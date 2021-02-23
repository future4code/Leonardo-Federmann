//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1-) a mensagem impressa será:
//a. false
//b. false
//c. true
//e. boolean

//2-) a mensagem impressa será:
//a. undefined
//b. null
//c. 11
//d. 3
//e. array ["3", "19", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
//f. 9

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

console.log('ATIVIDADES OBRIGATÓRIAS')
console.log('')

//1-)

let idade = prompt('Fala jovem? Quantos anos você tem?')
let idadeAmigo = prompt('Show! E quantos anos tem seu(sua) melhor amigo(a)?')
Number(idade)
Number(idadeAmigo)
console.log('Sua idade é maior que a do seu(sua) melhor amigo(a)?', idade > idadeAmigo)
console.log('A diferença de idade entre você e seu(sua) melhor amigo(a) é de', idade - idadeAmigo, 'ano(s)')
console.log('')

//2-)

let par = prompt('Insira um número par qualquer:')
Number(par)
console.log('O resto da divisão desse número por 2 é:', par % 2)
// LETRA C: o resto da divisão de números pares por 2 é sempre 0, o que foi confirmado pelo programa.
// LETRA D: o resto da divisão de números ímpares por 2 é sempre 1, o que foi confirmado pelo programa.
console.log('')

//3-)

let listaDeTarefas
let tarefa0 = prompt('Fala jovem! Me conte agora uma tarefa que você precisa realizar hoje. Essa será a tarefa de número 0')
let tarefa1 = prompt('Me conte agora uma outra tarefa, que será a de número 1:')
let tarefa2 = prompt('Por fim, me conte uma última tarefa, de número 2:')
listaDeTarefas = [tarefa0, tarefa1, tarefa2]
console.log('Sua lista de tarefas é:', listaDeTarefas)
let feito = prompt('Digite agora o número de uma tarefa que você já fez:')
listaDeTarefas.splice(feito, 1)
console.log('Parabéns! Sua lista de tarefas agora é:', listaDeTarefas)
console.log('')

//4-)

let nomeDoUsuario = prompt('Fala jovem! Me diz aí qual é seu nome')
let emailDoUsuario = prompt('Prazer! Me diz agora qual é seu email:')
console.log('O email ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(o), ' + nomeDoUsuario + "!")
console.log('')

//DESAFIOS

console.log('DESAFIOS')
console.log('')

//1-)

//a)
let F = 77
let K = (F - 32) * 5 / 9 + 273.15
console.log('O equivalente de ', F, 'ºF, em Kelvin, é', K, 'K.')

//b)
let C = 80
F = C * 9 / 5 + 32
console.log('O equivalente a', C, 'ºC, em Fahreinheit, é', F, 'ºF.')

//c)
C = 30
F = C * 9 / 5 + 32
K = (F - 32) * 5 / 9 + 273.15
console.log('O equivalente a', C, 'ºC, em Fahrenheit e Kelvin, é:', F, 'ºF e', K, 'K.')

//d)
C = prompt('Agora insira um valor em graus Celsius que eu lhe direi seu equivalente em Fahrenheit e em Kelvin. Não precisa inserir unidade.')
Number(C)
F = C * 9 / 5 + 32
K = (F - 32) * 5 / 9 + 273.15
console.log('O equivalente a', C, 'ºC, em Fahrenheit e Kelvin, é:', F, 'ºF e', K, 'K.')
console.log('')

//2-)
//Comandos para que o usuário insira os valores de consumo e desconto:
let kwh = prompt('Insira o valor de kWh consumido em sua residência (não precisa de unidade):')
Number(kwh)
let pag = kwh * 0.05
console.log('O valor total que você deverá pagar (ainda sem desconto) será: R$', pag)
let desconto = prompt('Insira agora o valor percentual do desconto (também sem unidade):')
pag *= (100 - desconto) / 100
console.log('Porém, com o desconto de', desconto, '%, o valor a ser pago será: R$', pag)
console.log('')

//Comandos para os valores específicos de 280kWh e 15% de desconto:
console.log('Vamos agora para o valor específico de 280 kWh')
kwh = 280
pag = kwh * 0.05
console.log('O valor total a ser pago por essa residência (ainda sem desconto) será: R$', pag)
desconto = 15
pag *= (100 - desconto) / 100
console.log('Porém, com desconto de', desconto, '%, o valor total ser pago é: R$', pag)
console.log('')

//3-)

//a)
//Fórmula encontrada: kg = lb/2.2046
let lb = 20
let kg = lb / 2.2046
console.log('', lb, 'lb equivalem a', kg, 'kg.')

//b)
//Fórmula encontra: kg = oz/35.274
let oz = 10.5
kg = oz / 35.274
console.log('', oz, 'oz equivalem a', kg, 'kg.')

//c)
//Fórmula encontrada: m = mi/0.00062137
let milhas = 100
let metros = milhas / 0.00062137
console.log('', milhas, 'mi equivalem a', metros, 'm.')

//d)
//Fórmula encontrada: m = ft/3.2808
let ft = 50
metros = ft / 3.2808
console.log('', ft, 'ft equivalem a', metros, 'm.')

//e)
//Fórmula encontrada: L = gal/0.26417
let gal = 103.56
let L = gal / 0.26417
console.log('', gal, 'gal equivalem a', L, 'l.')

//f)
//Fórmula encontrada: L = 0.24*xic
let xic = 450
L = 0.24 * xic
console.log('', xic, 'xic equivalem a', L, 'l.')

//g)
console.log('')
lb = prompt('Insira a quantidade de libras para converter para kg:')
kg = lb / 2.2046
console.log('', lb, 'lb equivalem a', kg, 'kg.')

oz = prompt('Insira a quantidade de onças (GRAUR hehehe) para converter para kg:')
kg = oz / 35.274
console.log('', oz, 'oz equivalem a', kg, 'kg.')

milhas = prompt('Insira a quantidade de milhas para converter para metros:')
metros = milhas / 0.00062137
console.log('', milhas, 'mi equivalem a', metros, 'm.')

ft = prompt('Insira a quantidade de pés para converter para metros:')
metros = ft / 3.2808
console.log('', ft, 'ft equivalem a', metros, 'm.')

gal = prompt('Insira a quantidade de galões para converter para litros:')
L = gal / 0.26417
console.log('', gal, 'gal equivalem a', L, 'l.')

xic = prompt('Insira a quantidade de xícaras para converter para litros:')
L = 0.24 * xic
console.log('', xic, 'xic equivalem a', L, 'l.')

