import React, {Component} from 'react'
import { unmountComponentAtNode } from 'react-dom'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	
	// ITEM 4: fazer funcionar o input de comentários, colocando seu valor no estado. Incluir um console.log sempre que algum valor for digitado no input.

	state = {
		textoDoComentario: '',
	}

	onChangeComentario=(event)=>{
		console.log(event.target.value)
		this.setState({
			textoDoComentario: event.target.value,
		})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textoDoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
