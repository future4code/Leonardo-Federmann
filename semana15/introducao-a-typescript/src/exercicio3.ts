//a)

type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

//b) As entradas da função serão a array de posts e um determinado autor que se deseja buscar. Sua saída será um array com todos os posts cujo autor seja o buscado.
// Segue a função tipada para TypeScript:

function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}