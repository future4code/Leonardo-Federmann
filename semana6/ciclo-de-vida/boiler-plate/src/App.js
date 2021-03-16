import React from 'react'
import styled from 'styled-components'
import './styles.css'

//------------------------------------------ESTILIZAÇÃO------------------------------------------------

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
//----------------------------------------INÍCIO DA APLICAÇÃO------------------------------------------

class App extends React.Component {
  state = {
    tarefas: [],
    // tarefas: JSON.parse(localStorage.getItem('listaSalva')),
    inputValue: '',
    filtro: '',

    //DESAFIO 5: propriedade criada para o input controlado do campo de filtro pelo nome da tarefa:
    tarefaPesquisada: '',

    // listaDeBusca: JSON.parse(localStorage.getItem('listaDeBusca')),
    listaDeBusca: [],
    buscando: false
  }

  //----------------------------------------FUNÇÕES----------------------------------------------------

  //DESAFIO 5: função criada para o mesmo input controlado supracitado:
  onChangeTarefaPesquisada = (event) => {
    this.setState({ tarefaPesquisada: event.target.value })
  }

  componentDidUpdate() {

  };

  componentDidMount() {
    let listaSalva = JSON.parse(localStorage.getItem('listaSalva'))
    if(listaSalva){
    this.setState({tarefas: JSON.parse(localStorage.getItem('listaSalva'))})
  }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    let novaTarefa = {
      id: this.state.inputValue,
      completa: false,
      texto: this.state.inputValue,
    }
    let arrayIntermediaria = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: arrayIntermediaria, inputValue: '' })
    localStorage.setItem('listaSalva', JSON.stringify(arrayIntermediaria))
  }

  selectTarefa = (id) => {
    let arrayDeTarefas = [...this.state.tarefas]
    arrayDeTarefas.forEach((tarefa) => {
      tarefa.id === id ? tarefa.completa = !tarefa.completa : tarefa.completa = tarefa.completa
    })
    localStorage.setItem('listaSalva', JSON.stringify(arrayDeTarefas))
    arrayDeTarefas = JSON.parse(localStorage.getItem('listaSalva'))
    this.setState({ tarefas: arrayDeTarefas })
  }

  //DESAFIO 2: visualizar tarefas completas e pendentes separadamente, conforme o filtro escolhido:
  onChangeFiltro = (event) => {
    this.setState({ filtro: event.target.value })
  }

  //DESAFIO 1: criar funcionalidade para excluir uma tarefa da lista:
  excluirTarefa = (idDaTarefa) => {
    let arrayIntermediaria = [...this.state.tarefas]
    let novaLista = arrayIntermediaria.filter((tarefa) => {
      return tarefa.id !== idDaTarefa
    })
    localStorage.setItem('listaSalva', JSON.stringify(novaLista))
    novaLista = localStorage.getItem('listaSalva')
    this.setState({ tarefas: JSON.parse(localStorage.getItem('listaSalva')) })
  }

  //DESAFIO 4: função para excluir todas as tarefas:
  limparLista = () => {
    let listaLimpa = [...this.state.tarefas]
    listaLimpa.splice(0, listaLimpa.length)
    localStorage.setItem('listaSalva', JSON.stringify(listaLimpa))
    this.setState({ tarefas: JSON.parse(localStorage.getItem('listaSalva')) })
  }

  //DESAFIO 5: a função "buscarTarefas" refere-se ao campo de busca, criando uma nova lista cujos itens estejam de acordo com o valor buscado pelo usuário.
  buscarTarefa = () => {
    this.setState({ buscando: true })
    let arrayIntermediaria = [...this.state.tarefas]
    let novaLista = arrayIntermediaria.filter((tarefa) => {
      return tarefa.texto.includes(this.state.tarefaPesquisada)
    })
    localStorage.setItem('listaDeBusca', JSON.stringify(novaLista))
    this.setState({ listaDeBusca: JSON.parse(localStorage.getItem('listaDeBusca')) })
  }

  //DESAFIO 5: a função "mostrarListaCompleta" deixará de imprimir a lista filtrada e mostrará todas as tarefas:
  mostrarListaCompleta = () => {
    this.setState({ buscando: false })
  }

  callbackCrescente = (a, b) => {
    return a - b
  }

  callbackDecrescente = (a, b) => {
    return b - a
  }


  //DESAFIO 6: ordenar os itens da lista por ordem alfabética:
  ordemAlfabetica = () => {
    let arrayIntermediaria = [...this.state.tarefas]

    //A seguinte função foi retirada do site: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.

    arrayIntermediaria.sort((a, b) => {
      return (a.texto > b.texto) ? 1 : ((b.texto > a.texto) ? -1 : 0)
    })
    localStorage.setItem('listaSalva', JSON.stringify(arrayIntermediaria))
    this.setState({ tarefas: JSON.parse(localStorage.getItem('listaSalva')) })
  }

  ordemAlfabeticaInversa = () => {
    let arrayIntermediaria = [...this.state.tarefas]
    arrayIntermediaria.sort((a, b) => {
      return (b.texto > a.texto) ? 1 : ((a.texto > b.texto) ? -1 : 0)
    })
    localStorage.setItem('listaSalva', JSON.stringify(arrayIntermediaria))
    this.setState({ tarefas: JSON.parse(localStorage.getItem('listaSalva')) })
  }

  //-----------------------------------------INÍCIO DA RENDERIZAÇÃO-----------------------------------------

  render() {

    let listaFiltrada = []

    //DESAFIO 5: o if else a seguir for adicionado para que o usuário opte por visualizar a lista completa de tarefas ou apenas com o filtro inserido no campo de busca:
    if (this.state.buscando === false) {
      listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
    } else {
      listaFiltrada = this.state.listaDeBusca.filter(tarefa => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
    }

    //------------------------------------------------INÍCIO DO JSX-----------------------------------------

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>

          {/* DESAFIO 4: botão para excluir todas as tarefas: */}
          <button onClick={this.limparLista}>Limpar lista</button>
        </InputsContainer>
        <hr></hr>
        <InputsContainer>
          <label for="busca">Buscar tarefa:</label>
          <input id="busca" value={this.state.tarefaPesquisada} onChange={this.onChangeTarefaPesquisada} />
          <button onClick={this.buscarTarefa}>Buscar</button>
          <button onClick={this.mostrarListaCompleta}>Retornar à lista completa</button>
        </InputsContainer>
        <hr></hr>
        <InputsContainer>
          <button onClick={this.ordemAlfabetica}>Ordem alfabética (A-Z)</button>
          <button onClick={this.ordemAlfabeticaInversa}>Ordem alfabética inversa (Z-A)</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFiltro}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}

                //DESAFIO 1: evento adicionado para excluir uma tarefa, o que ocorrerá quando ela for clicada duas vezes:
                onDoubleClick={() => this.excluirTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
