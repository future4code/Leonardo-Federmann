import React, { useState } from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input`
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comentario, mudarComentario] = useState('')

	const onChangeComentario = (event) => {
		mudarComentario(event.target.value)
	}

	const enviarComentarioComEnter = (event) => {
		if (event.key === 'Enter') {
			console.log(event.key)
			props.enviarComentario(comentario)
		}
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentario}
				onChange={onChangeComentario}
				onKeyDown={enviarComentarioComEnter}
			/>
			<button onClick={() => { props.enviarComentario(comentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario