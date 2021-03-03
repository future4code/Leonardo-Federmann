//---------------------------------------ATIVIDADE DE OBJETOS EM JS-----------------------------------------

//ITEM 1: transferir os arquivos do zip para a pasta "blog" - FEITO

let posts = []
let createPost = () => {
    //ITEM 2: capturar os valores dos campos no HTML e guardá-los em um objeto:
    let infoPost = {
        title: document.getElementById("titulo-post").value,
        author: document.getElementById("autor-post").value,
        content: document.getElementById("conteudo-post").value,
        image: document.getElementById("imagem-post").value,
        imageDescription: document.getElementById("descricao-imagem-post").value,
    }
    //ITEM 3: ao preencher o formulário, adicione o objeto a um array de objetos:
    posts.push(infoPost)

    //ITEM 4: criar uma seção no HTML responsável por mostrar os posts:
    //essa seção já veio no template fornecido com a id "container-de-posts".

    //ITEM 5: criar uma função que insira os posts no HTML:
    //Essa função (createPost) já foi declarada no início do código.
    //Seguem os comandos responsáveis por inserir os posts no HTML:
    let page = document.getElementById("container-de-posts")
    let TITLE = `<h1>${posts[posts.length - 1].title}</h1>`
    let AUTHOR = `<h3>Por: ${posts[posts.length - 1].author}</h3>`
    let CONTENT = `<p>${posts[posts.length - 1].content}</p>`

    //DESAFIO 1: incluir uma imagem no post:
    let IMAGE = `<img src="${posts[posts.length - 1].image}" alt="${posts[posts.length - 1].imageDescription}">`
    page.innerHTML += TITLE + AUTHOR + CONTENT + IMAGE + '<br></br>'

    //ITEM 3 (CONTINUAÇÃO): limpe os campos do formulário:
    document.getElementById("titulo-post").value = ''
    document.getElementById("autor-post").value = ''
    document.getElementById("conteudo-post").value = ''
    document.getElementById("imagem-post").value = ''
    document.getElementById("descricao-imagem-post").value = ''
}
