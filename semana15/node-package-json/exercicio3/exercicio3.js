const tasks = ['Ir no mercado', 'Lavar louça', 'Sair com o cachorro']
const newTask = process.argv[2]
if(newTask){
    tasks.push(newTask)
    console.log('Tarefa adicionada com sucesso!')
    console.log(`Lista de tarefas atualizada:`)
    tasks.forEach((task)=>{
        console.log(`- ${task}`)
    })
}else{
    console.log(`Insira uma tarefa válida.`)
}