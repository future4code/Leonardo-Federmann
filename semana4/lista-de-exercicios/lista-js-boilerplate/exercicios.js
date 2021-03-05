//Exercício 1

function inverteArray(array) {
   let arrayInvertido = []
   for (let i = 0; i < array.length; i++) {
      arrayInvertido.push(array[array.length - 1 - i])
   }
   return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let paresAoQuadrado = []
   for (n of array) {
      if (n % 2 === 0) {
         paresAoQuadrado.push(n * n)
      }
   }
   return paresAoQuadrado
}

//Exercício 3

function retornaNumerosPares(array) {
   //Elaborei duas soluções para este exercício: uma utilizando o que aprendemos na semana passada (comitada)
   //e uma usando funções de array, aprendidas nessa semana (solução vigente):

   // let pares = []
   // for (n of array){
   //    if(n%2===0){
   //    pares.push(n)
   //    }
   // }
   // return pares

   let pares = array.filter((n) => {
      if (n % 2 === 0) {
         return true
      }
      return false
   })
   return pares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maior = array[0]
   for (n of array) {
      if (n > maior) {
         maior = n
      }
   }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3
   let resultados = [false, false, true, true, true]
   return resultados
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayDePares = []
   for (let i = 0; i < n; i++) {
      arrayDePares.push(i * 2)
   }
   return arrayDePares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c) {
      return 'Equilátero'
   } else if (a === b || b === c || c === a) {
      return 'Isósceles'
   } else {
      return 'Escaleno'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let objeto = {
      maiorNumero: 0,
      maiorDivisivelporMenor: true,
      diferenca: 0
   }
   if (num1 > num2) {
      objeto.maiorNumero = num1
      objeto.diferenca = num1 - num2
      if (num1 % num2 === 0) {
         objeto.maiorDivisivelporMenor = true
      } else {
         objeto.maiorDivisivelporMenor = false
      }
   } else {
      objeto.maiorNumero = num2
      objeto.diferenca = num2 - num1
      if (num2 % num1 === 0) {
         objeto.maiorDivisivelporMenor = true
      } else {
         objeto.maiorDivisivelporMenor = false
      }
   }
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {

   //Utilizei a função do exercício 11 na solução do 10:
   let arrayOrdenada = ordenaArray(array)
   let segundoMaiorEMenor = [arrayOrdenada[arrayOrdenada.length - 2], arrayOrdenada[1]]
   return segundoMaiorEMenor
}

//Exercício 11

function ordenaArray(array) {
   
   //Para esse exercício, elaborei duas soluções: uma utilizando array.sort (comitada)
   //e uma sem utilizá-la, conforme solicitado no desafio (solução vigente):

   // function callback(a,b){
   //    return a-b
   // }
   // array.sort(callback)
   // return array

   //A variável arrayIntermediaria (declarada abaixo) foi inclusa para evitar alterações na array original.
   let arrayIntermediaria = array
   let arrayOrdenada = []
   for (let i = 0; i < array.length; i++) {
      let menor = arrayIntermediaria[0]
      for (n of arrayIntermediaria) {
         if (n < menor) {
            menor = n
         }
      }
      arrayOrdenada.push(menor)

      //A função do exercício 4 foi utilizada para alterar o valor do menor elemento na arrayIntermediaria
      //e aumentar seu valor, levando-o a não mais ser o maior (permitindo, assim, seguir para o segundo
      //menor elemento, depois para o terceiro e assim por diante):
      arrayIntermediaria[array.indexOf(menor)] = retornaMaiorNumero(arrayIntermediaria)
   }
   return arrayOrdenada
}

// Exercício 12

function filmeFavorito() {
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   let filme = filmeFavorito()
   let anuncio = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por `
   for (let i = 0; i < filme.atores.length - 1; i++) {
      anuncio += filme.atores[i] + ', '
   }
   anuncio += filme.atores[filme.atores.length - 1] + '.'
   return anuncio
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let informacoesRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return informacoesRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = 'ANÔNIMO'
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let adultos = []
   for (n of arrayDePessoas) {
      if (n.idade >= 18) {
         adultos.push(n)
      }
   }
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let criancasEAdolescentes = []
   for (n of arrayDePessoas) {
      if (n.idade < 18) {
         criancasEAdolescentes.push(n)
      }
   }
   return criancasEAdolescentes
}

// Exercício 17, letra A

const array = [1, 2, 3, 4, 5, 6]

function multiplicaArrayPor2(array) {
   let dobro = array.map((num) => {
      return 2 * num
   })
   return dobro
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let dobro = multiplicaArrayPor2(array)
   let fraseDobro = []
   for (n of dobro) {
      fraseDobro.push(String(n))
   }
   return fraseDobro
}

// Exercício 17, letra C

function verificaParidade(array) {
   let parOuImpar = []
   for (n of array) {
      if (n % 2 === 0) {
         parOuImpar.push(`${n} é par`)
      } else {
         parOuImpar.push(`${n} é ímpar`)
      }
   }
   return parOuImpar
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizadas = pessoas.filter((pessoa) => {
      if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
         return true
      }
      return false
   })
   return autorizadas
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizadas = pessoas.filter((pessoa) => {
      if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
         return true
      }
      return false
   })
   return naoAutorizadas
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   let textoDoEmail
   let emailsDeRetorno = consultas.map((paciente) => {
      let titulo
      let pronomeObliquo
      switch (paciente.genero) {
         case 'masculino':
            titulo = 'Sr.'
            pronomeObliquo = 'lo'
            break;
         case 'feminino':
            titulo = 'Sra.'
            pronomeObliquo = 'la'
            break;
         default:
            break;
      }
      if (paciente.cancelada === false) {
         textoDoEmail = `Olá, ${titulo} ${paciente.nome}. Estamos enviando esta mensagem para lembrá-${pronomeObliquo} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste email.`
         return textoDoEmail
      } else {
         textoDoEmail = `Olá, ${titulo} ${paciente.nome}. Infelizmente sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
         return textoDoEmail
      }
   })
   return emailsDeRetorno
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((pessoa)=>{
      let gastos = 0
      for(n of pessoa.compras){
         gastos+=n
      }
      pessoa.saldoTotal -= gastos
   })
   return contas
}