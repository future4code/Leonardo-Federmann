//a) A função receberá uma array de números e retornará um objeto chamado "estatísticas", que conterá seu maior número, seu menor número e sua média.
// Segue a função tipada segundo o TypeScript:

type estat = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros:number[]):estat {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:estat = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) Além das variáveis citadas no item A, há também uma array de números com a array cujos números estão em ordem crescente (por ser uma array de números, requer a tipagem number[]), uma variável que indica a soma de todos os itens da array (que possui a tipagem number, por ser do tipo number) e o objeto "estatisticas", que, por ser o valor retornado, deve ser do tipo "estat", criado no item A e possuindo três variáveis do tipo number.

//c) 

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros:number[])=>amostra
}