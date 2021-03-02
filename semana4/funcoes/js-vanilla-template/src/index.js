//ATIVIDADE DE FUNÇÕES

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1-)
//a) 
//A mensagem impressa no código será:
//10
//50

//b)
//Não seria impressa nenhuma mensagem no terminal. Em vez disso, seriam multiplicados por 5 os valores 2 e 10,
//sem, contudo, serem atribuídos a nenhuma variável.

//-------------------------------------------------------------------------------------------------------

//2-)
//a)
//As saídas serão:
//Darvas
//Caio
//Vale ressaltar que o for exibido apenas percorrerá os índices 0 e 1 da array. Logo, apenas
//seus dois primeiros valores serão impressos.

//b)
//Os valores impressos seriam:
//Amanda
//Caio

//-------------------------------------------------------------------------------------------------------

//3-)
//A função verificará quais itens da array de entrada são pares e elevará os que o forem ao quadrado,
//adicionando-os um a um a uma nova array. Em vez de "metodo", alguns exemplos de nomes mais apropriados
//para essa função seriam: paresAoQuadrado, arrayParesAoQuadrado, segundaPotenciaPares.

//-------------------------------------------------------------------------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
console.log('EXERCÍCIOS DE ESCRITA DE CÓDIGO')
console.log('')

//4-)
console.log('4-)')

//a)
console.log('a)')

let quemSouEu = () => {
    console.log('Meu nome é Leonardo, tenho 26 anos, moro em São Paulo, em breve serei um dev e adoro a Marvel (acho que deu para notar hahaha).')
}
quemSouEu()

console.log('')
//b)
console.log('b)')

let apresentacao = (nome, idade, cidade, estudante) => {
    if (estudante === true) {
        console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e sou estudante.')
    } else {
        console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e não sou estudante.')
    }
}

apresentacao('Harry Potter', '16', 'Hogwarts', true)

console.log('')

//-------------------------------------------------------------------------------------------------------

//5-)
console.log('5-)')

//a)
console.log('a)')

let soma = (n1, n2) => {
    const S = n1 + n2
    return S
}
console.log('Exemplo da função soma: o resultado da soma entre os números 5 e 7 vale: ' + soma(5, 7))

console.log('')
//b)
console.log('b)')

let maiorOuIgual = (n1, n2) => {
    const maiorIgual = n1 >= n2
    return maiorIgual
}
console.log('Exemplo de aplicação: 12 é maior que 6? ' + maiorOuIgual(12, 6))

console.log('')
//c)
console.log('c)')

let dezVezes = (texto) => {
    for (i = 1; i <= 10; i++) {
        console.log(texto)
    }
}
dezVezes('Quero ser repetido 10 vezes, por favor. =D')

console.log('')

//-------------------------------------------------------------------------------------------------------

//6-)
console.log('6-)')

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a)
console.log('a)')

let numeroElementos = (lista) => {
    let n = 0
    for (i of lista) {
        n++
    }
    return n
}
console.log('Número de elementos na array: ' + numeroElementos(array))

console.log('')
//b)
console.log('b)')

let parOuImpar = (n) => {
    if (n % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
console.log('O número ' + array[2] + ' é ' + parOuImpar(array[2]))

console.log('')
//c)
console.log('c)')

let quantidadePares = (lista) => {
    let qtd = 0
    for (n of lista) {
        if (n % 2 === 0) {
            qtd++
        }
    }
    return qtd
}
console.log('Quantidade de números pares na array: ' + quantidadePares(array))

console.log('')
//d)
console.log('d)')

let quantidadesPares2 = (lista) => {
    let qtd = 0
    for (n of lista) {
        if (parOuImpar === 'par') {
            qtd++
        }
    }
    return qtd
}
console.log('Quantidade de números pares na array: ' + quantidadePares(array))
console.log('')

//-------------------------------------------------------------------------------------------------------

//DESAFIOS
console.log('DESAFIOS')
console.log('')

//1-)
console.log('1-)')

//a)
console.log('a)')

let mostrarParametro = (par) => {
    console.log(par)
}
mostrarParametro(123456)

console.log('')
//b)
console.log('b)')

let soma2 = (n1, n2) => {
    console.log('O resultado da soma de ' + n1 + ' com ' + n2 + ' é:')

    //Usei a função criada no item 5a para calcular a soma:
    mostrarParametro(soma(n1, n2))
}
soma2(657, 443)

console.log('')

//-------------------------------------------------------------------------------------------------------

//2-)
console.log('2-)')

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//a)
console.log('a)')

let dobroDosPares = (lista) => {
    let dobrandoOsPares = []
    for (n of lista) {
        if (n % 2 === 0) {
            dobrandoOsPares.push(2 * n)
        }
    }
    return dobrandoOsPares
}

//Função extra para mostrar os elementos de uma array um ao lado do outro:
let mostrarElementosAoLado = (lista) => {
    let elementos = ''
    for (n of lista) {
        elementos += n + ' '
    }
    return elementos
}
console.log('Os elementos pares da lista multiplicados por 2 são: ' + mostrarElementosAoLado(dobroDosPares(numeros)))

console.log('')
//b)
console.log('b)')

let maiorDaLista = (lista) => {
    let maior = 0
    for (n of lista) {
        if (n > maior) {
            maior = n
        }
    }
    return maior
}
console.log('O maior elemento da array é: ' + maiorDaLista(numeros))

console.log('')
//c)
console.log('c)')

let indiceDoMaior = (lista) => {
    let indiceMaior
    for (i = 0; i < lista.length; i++) {
        if (lista[i] === maiorDaLista(lista)) {
            indiceMaior = i
        }
    }
    return indiceMaior
}
console.log('O maior número da array tem índice igual a: ' + indiceDoMaior(numeros))

console.log('')
//d)
console.log('d)')

let inverterArray = (lista) => {
    let listaInversa = []
    for (i = 0; i < lista.length; i++) {
        listaInversa.push(lista[lista.length - 1 - i])
    }
    return listaInversa
}
console.log('Os elementos da lista em ordem inversa são: ' + mostrarElementosAoLado(inverterArray(numeros)))