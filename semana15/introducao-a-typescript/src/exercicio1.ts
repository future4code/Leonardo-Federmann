//a)
const minhaString:string = "oi"
//Caso eu tente atribuir um número a esta variável, uma mensagem de erro é exibida dizendo que tal variável não pode assumir o tipo number.

//b)
const meuNumero:number = 2
//Caso eu deseje que tal variável aceite strings e number, devo especificar tais tipos logo após a declaração da variável, separados por uma barra ( | ). A variável a seguir exemplifica tal feito e pode assumir tanto o tipo string quanto o number:

const numeroOuString:(string|number) = "Aceita números e strings."

//c)
enum CORES{
    AZUL = "azul",
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    VIOLETA = "violeta",
    VERDE = "verde",
    ANIL = "anil",
    AMARELO = "amarelo"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const amanda:pessoa ={
    nome: "Amanda",
    idade: 32,
    corFavorita: CORES.AZUL
}

const henrique:pessoa ={
    nome: "Henrique",
    idade: 104,
    corFavorita: CORES.VIOLETA
}

const fernanda:pessoa = {
    nome: "Fernanda",
    idade: 27,
    corFavorita: CORES.ANIL
}

const tony:pessoa = {
    nome: "Tony Stark",
    idade: 54,
    corFavorita: CORES.VERMELHO
}

//d)