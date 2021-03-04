let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()

// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((despesa) => {
        divDespesas.innerHTML += `<p>Valor: R$${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}`
    })
    //FIM DA IMPREMENTAÇÃO
}

//DESAFIO 2: botão que coloque as compras em ordem decrescente de valores:
function ordemDescrescenteValores(despesas) {
    let divOrdemDecrescente = document.getElementById('despesas')
    divOrdemDecrescente.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    function segundoNumeroMaior(a, b) {
        return b - a
    }
    let valoresDespesas = despesas.map((despesa) => {
        return despesa.valor
    })
    console.log(valoresDespesas)
    valoresDespesas.sort(segundoNumeroMaior)
    console.log(valoresDespesas)
    for (let i = 0; i < despesas.length; i++) {
        for (let j = 0; j < despesas.length; j++) {
            if (valoresDespesas[i] === despesas[j].valor) {
                divOrdemDecrescente.innerHTML += `<p>Valor: R$${despesas[j].valor} | Tipo: ${despesas[j].tipo} | Descrição: ${despesas[j].descricao}`
            }
        }
    }
}
//FIM DO DESAFIO 2

// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((despesa) => {
        switch (despesa.tipo) {
            case 'alimentação':
                gastoAlimentacao += despesa.valor
                break
            case 'utilidades':
                gastoUtilidades += despesa.valor
                break
            case 'viagem':
                gastoViagem += despesa.valor
                break
            default:
                break
        }
    })
    // gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
    //O cálculo acima foi comitado para a realização do Desafio 3.
    //FIM DA IMPREMENTAÇÃO

    //DESAFIO 3: calcular o valor total gasto pelo usuário com a função "reduce":
    let gastos = [gastoAlimentacao, gastoUtilidades, gastoViagem]
    gastoTotal = gastos.reduce((acumulador, gastoTipo) => {
        return acumulador + gastoTipo
    })
    //FIM DO DESAFIO 3.

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}

function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}

function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}

// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    //DESAFIO 1: validação que não permita valores inválidos nos campos de filtro:
    // || validarValor(valorMin)===false || validarValor(valorMax)===false
    if (tipoFiltro === '') {
        alert('Preencha os campos com números válidos e selecione um tipo de filtro.')
    } else if (valorMax < 0 || valorMin < 0) {
        alert('Preencha os campos com números positivos válidos.')
    } else if (valorMin > valorMax) {
        alert('O valor mínimo não pode ser maior que o máximo. Verifique se ambos não estão trocados.')
    } else {
        // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
        let despesasFiltradas = arrDespesas.filter((despesa) => {
            if (tipoFiltro !== 'todos') {
                return despesa.tipo === tipoFiltro && despesa.valor >= valorMin && despesa.valor <= valorMax
            }
            return despesa.valor >= valorMin && despesa.valor <= valorMax
        })
        //FIM DA IMPREMENTAÇÃO

        imprimirDespesas(despesasFiltradas)
    }
    //FIM DO DESAFIO 1
}

// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}