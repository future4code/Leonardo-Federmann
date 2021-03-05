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
   //e uma usando funções de array, aprendidas nessa semana (essa é a solução vigente):

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
   let nPares = ''
   let arrayDePares = []
   for(let i=0; i<n; i++){
      arrayDePares.push(i)
   }
   for(let i=0; i<arrayDePares.length; i++){
      arrayDePares[i]*=2
   }
   return arrayDePares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if(a===b && b===c){
      return 'Equilátero'
   } else if (a===b || b===c || c===a){
      return 'Isósceles'
   } else{
      return 'Escaleno'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let objeto = {
      maiorNumero:0,
      maiorDivisivelporMenor:true,
      diferenca:0
   }
   if(num1>num2){
      objeto.maiorNumero=num1
      objeto.diferenca=num1-num2
      if(num1%num2===0){
         objeto.maiorDivisivelporMenor=true
      } else{
         objeto.maiorDivisivelporMenor=false
      }
   } else{
      objeto.maiorNumero = num2
      objeto.diferenca=num2-num1
      if(num2%num1===0){
         objeto.maiorDivisivelporMenor=true
      } else{
         objeto.maiorDivisivelporMenor=false
      }
   }
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let arrayOrdenada = ordenaArray(array)
   let resultado = [arrayOrdenada[arrayOrdenada.length-2], arrayOrdenada[1]]
   return resultado
}

//Exercício 11

function ordenaArray(array) {
   let arrayIntermediaria = array
   let arrayOrdenada = []
   for(let i=0; i<array.length; i++){
      let menor = arrayIntermediaria[0]
      //LÓGICA PARA PEGAR O MENOR
      for(n of arrayIntermediaria){
         if(n<menor){
            menor=n
         }
      }
      //FIM DA LÓGICA PARA PEGAR O MENOR
      arrayOrdenada.push(menor)
      arrayIntermediaria[array.indexOf(menor)] = retornaMaiorNumero(arrayIntermediaria)
   }
   return arrayOrdenada
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
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
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
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

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta(consultas) {
   // implemente sua lógica aqui
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
   // implemente sua lógica aqui
}