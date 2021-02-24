//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1-)
//O código testará se o número inserido pelo usuário é par. Se sim, ele passará no teste (e aparecerá a mensagem "passou no teste");
//senão, não passará (e aparecerá a mensagem "não passou no teste").

//----------------------------------------------------------------------------------------------------

//2-)
//a) 
//O código serve para averiguar o preço de uma fruta inseria pelo usuário. 
//Se a fruta for qualquer uma das citadas no código, o preço será aquele especificado no comando CASE;
//se for qualquer outra fruta, o preço será R$5,00.

//b)
//A mensagem será: "O preço da fruta Maçã é R$2.25"

//c)
//A mensagem será: "O preço da fruta Pêra é R$5"
//Tal mensagem estará equivocada, pois o preço da pera, na verdade, é R$5,50.

//----------------------------------------------------------------------------------------------------

//3-)
//a)
//A primeira linha declara uma variável chamada "numero", permite que o usuário insira um valor para ela
//e altera seu tipo de string para number.

//b)
//A mensagem mostrada será: "Esse número passou no teste"
//Logo depois, haverá um erro no terminal, pois a variável "mensagem" não está declarada no bloco global.
//No caso de um número ser -10, apenas a mensagem de erro será mostrada.

//c)
//Conforme explicado no item B, a variável "mensagem" está declarada apenas no bloco filho pertencente ao if,
//não no bloco pai (no caso, o global). Porém, o comando para imprimir o valor dessa variável está no bloco pai.
//Logo, será mostrada mensagem de erro, pois essa variável não será reconhecida.

//----------------------------------------------------------------------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
console.log('EXERCÍCIOS DE ESCRITA DE CÓDIGO')
console.log('')

//4-)
console.log('4-)')

let idade = Number(prompt('Vamos ver se você pode dirigir. Qual é a sua idade?'))
if (idade >= 18) {
    console.log('Você tem', idade, 'ano(s).')
    console.log('Você pode dirigir. Juízo, hein? =D')
} else if (idade < 18) {
    console.log('Você tem', idade, 'ano(s).')
    console.log('Você não pode dirigir (ainda).')
} else {
    console.log('Favor inserir um número válido para a sua idade.')
}

console.log('')

//----------------------------------------------------------------------------------------------------

//5-)
console.log('5-)')

let turno = prompt('Agora me diz: em qual turno do dia você estuda? Matutino (digite M), vespertino (digite V) ou noturno (digite N)?')
if (turno === 'm' || turno === 'M') {
    console.log('Bom dia! Você estuda no período matutino.')
} else if (turno === 'v' || turno === 'V') {
    console.log('Boa tarde! Você estuda no período vespertino.')
} else if (turno === 'n' || turno === 'N') {
    console.log('Boa noite! Você estuda no período noturno.')
} else {
    console.log('Favor inserir um dos caracteres citados.')
}

console.log('')

//----------------------------------------------------------------------------------------------------

//6-)
console.log('6-)')

let turno6 = prompt('Agora me diz: em qual turno do dia você estuda? Matutino (digite M), vespertino (digite V) ou noturno (digite N)?')
switch (turno6) {
    case 'm':
        console.log('Bom dia! Você estuda no período matutino.')
        break
    case 'M':
        console.log('Bom dia! Você estuda no período matutino.')
        break
    case 'v':
        console.log('Boa tarde! Você estuda no período vespertino.')
        break
    case 'V':
        console.log('Boa tarde! Você estuda no período vespertino.')
        break
    case 'n':
        console.log('Boa noite! Você estuda no período noturno.')
        break
    case 'N':
        console.log('Boa noite! Você estuda no período noturno.')
        break
    default:
        console.log('Favor inserir um dos caracteres citados.')
}

console.log('')

//----------------------------------------------------------------------------------------------------

//7-)
console.log('7-)')
let genero = prompt('Saudade de um cinema, né minha filha? Qual gênero de filme vocês vão assistir?')
let ingresso = Number(prompt('Agora me diz o preço do ingresso por pessoa (digite apenas números):'))
if (!isNaN(ingresso)) {
    if ((genero === 'fantasia' || genero === 'Fantasia') && ingresso < 15) {
        console.log('Show! Bom filme! =D')
    } else {
        console.log('Escolha outro filme. :(')
    }
} else {
    console.log('Insira um número válido para o preço do ingresso (SOMENTE números).')
}

console.log('')

//----------------------------------------------------------------------------------------------------

//DESAFIOS
console.log('DESAFIOS')
console.log('')

//1-)
console.log('1-)')

let generoFilme = prompt('Saudade de um cinema, né minha filha? Qual gênero de filme vocês vão assistir?')
let ingressoFilme = Number(prompt('Agora me diz o preço do ingresso por pessoa (digite apenas números):'))
if (!isNaN(ingressoFilme)) {
    if ((generoFilme === 'fantasia' || generoFilme === 'Fantasia') && ingressoFilme < 15) {
        let snack = prompt('Legal! Insere aqui qual lanche você vai comer no cinema:')
        console.log('Show! Bom filme!=D')
        console.log('...com', snack, '!')
    } else {
        console.log('Escolha outro filme. :(')
    }
} else {
    console.log('Insira um número válido para o preço do ingresso (SOMENTE números).')
}

console.log('')

//----------------------------------------------------------------------------------------------------

//2-)
console.log('2-)')

let nome = prompt('Nome completo:')
let tipo = prompt('Qual o tipo do jogo ao qual você irá assistir? Digite IN para jogos internacionais ou DO para jogos domésticos:')
if (tipo === 'in' || tipo === 'In' || tipo === 'iN') {
    tipo = 'IN'
}
if (tipo === 'do' || tipo === 'Do' || tipo === 'dO') {
    tipo = 'DO'
}
if (tipo !== 'IN' && tipo !== 'DO') {
    console.log('Favor inserir uma das opções citadas para o tipo de jogo.')
} else {
    let etapa = prompt('Qual a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final:')
    if (etapa === 'sf' || etapa === 'Sf' || etapa === 'sF') {
        etapa = 'SF'
    }
    if (etapa === 'dt' || etapa === 'Dt' || etapa === 'dT') {
        etapa = 'DT'
    }
    if (etapa === 'fi' || etapa === 'Fi' || etapa === 'fI') {
        etapa = 'FI'
    }
    if (etapa !== 'SF' && etapa !== 'DT' && etapa !== 'FI') {
        console.log('Favor inserir uma das opções citadas para a etapa do jogo.')
    } else {
        let categoria = Number(prompt('Qual a categoria dos lugares ocupadas? Escolha uma entre 1, 2, 3 ou 4 (digite somente o número):'))
        if (categoria !== 1 && categoria !== 2 && categoria !== 3 && categoria !== 4) {
            console.log('Favor inserir uma das opções citadas para a categoria.')
        } else {
            let qtd = Number(prompt('Insira agora a quantidade de ingressos desejada:'))
            if (!isNaN(qtd) === false || qtd <= 0) {
                console.log('Favor inserir um número válido para a quantidade de ingressos.')
            } else {
                let precoUni
                switch (categoria) {
                    case 1:
                        switch (etapa) {
                            case 'SF':
                                precoUni = 1320
                                break
                            case 'DT':
                                precoUni = 660
                                break
                            case 'FI':
                                precoUni = 1980
                                break
                            default:
                                break
                        }
                        break
                    case 2:
                        switch (etapa) {
                            case 'SF':
                                precoUni = 880
                                break
                            case 'DT':
                                precoUni = 440
                                break
                            case 'FI':
                                precoUni = 1320
                                break
                            default:
                                break
                        }
                        break
                    case 3:
                        switch (etapa) {
                            case 'SF':
                                precoUni = 550
                                break
                            case 'DT':
                                precoUni = 330
                                break
                            case 'FI':
                                precoUni = 880
                                break
                            default:
                                break
                        }
                        break
                    case 4:
                        switch (etapa) {
                            case 'SF':
                                precoUni = 220
                                break
                            case 'DT':
                                precoUni = 170
                                break
                            case 'FI':
                                precoUni = 330
                                break
                            default:
                                break
                        }
                        break

                    default:
                        break
                }
                console.log('---DADOS DA COMPRA---')
                console.log('')
                console.log('Nome do cliente:', nome)
                if (tipo === 'IN') {
                    console.log('Tipo de jogo: Internacional')
                } else {
                    console.log('Tipo de jogo: Nacional')
                }
                if (etapa === 'SF') {
                    console.log('Etapa do jogo: Semi-final')
                } else if (etapa === 'DT') {
                    console.log('Etapa do jogo: Decisão de 3º lugar')
                } else {
                    console.log('Etapa do jogo: Final')
                }
                console.log('Categoria:', categoria)
                console.log('Quantidade de ingressos:', qtd, 'ingressos')
                console.log('')
                console.log('---Valores---')
                if (tipo === 'DO') {
                    console.log('Valor do ingresso: R$', precoUni)
                    console.log('Valor total: R$', qtd * precoUni)
                } else {
                    precoUni /= 4.1
                    console.log('Valor do ingresso: US$', precoUni)
                    console.log('Valor total: US$', qtd * precoUni)
                }
            }
        }
    }
}


