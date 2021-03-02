//ATIVIDADE DE DOM

//Declaração das variáveis necessárias, importando-as do HTML:
let tarefa = document.getElementById("tarefa")
let dia = document.getElementById("dias-semana")
let hora = document.getElementById("horarios")
let dom = document.getElementById("domingo")
let seg = document.getElementById("segunda")
let ter = document.getElementById("terca")
let qua = document.getElementById("quarta")
let qui = document.getElementById("quinta")
let sex = document.getElementById("sexta")
let sab = document.getElementById("sabado")

//Função chamada caso o botão "Criar tarefa" seja clicado:
let adicionarTarefa = () => {

    //DESAFIO 1: caso o campo de tarefa esteja vazio, o usuário será alertado:
    if (tarefa.value === '') {
        let alerta = confirm('O campo de tarefa está vazio. Digite uma tarefa para incluir no planner.')

        //Caso contrário, segue-se para a adição de tarefas:
    } else {
        switch (dia.value) {
            case 'domingo':
                //DESAFIO 2: as tarefas são riscadas quando clicadas:    
                //DESAFIO 4: são adicionadas aos dias as horas nas quais as tarefas serão realizadas:
                dom.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'segunda':
                seg.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'terca':
                ter.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'quarta':
                qua.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'quinta':
                qui.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'sexta':
                sex.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            case 'sabado':
                sab.innerHTML += "<p class='itemPlanner' onclick='riscarTarefa(this)'>" + tarefa.value + " às " + hora.value + "</p>"
                break
            default:
                break
        }
    }

    //Após adicionada uma tarefa, o input deverá estar vazio:
    tarefa.value = ""
}

//DESAFIO 2: riscar uma tarefa quando clicada
let riscarTarefa = (n) => {
    n.style = "text-decoration: line-through"
}

//DESAFIO 3: criar um botão para limpar o planner:
let limparPlanner = () => {
    dom.innerHTML = ''
    seg.innerHTML = ''
    ter.innerHTML = ''
    qua.innerHTML = ''
    qui.innerHTML = ''
    sex.innerHTML = ''
    sab.innerHTML = ''
}

//DESAFIO 5: realizado na página CSS