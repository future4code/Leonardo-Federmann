import React from 'react'
import './SecaoCompartilhamento.css'

export default class SecaoCompartilhamento extends React.Component {


    render() {
        return <main className={'sharing-container'}>
            <section className={'escolha-da-rede-social'}>
                <p>Compartilhar no:</p>
                <img
                    onClick={this.props.mensagemCompartilhamento}
                    className={'iconeDeRedeSocial'}
                    src={'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png'}
                    alt='Instagram'
                />
                <img
                    onClick={this.props.mensagemCompartilhamento}
                    className={'iconeDeRedeSocial'}
                    src={'https://www.itabirito.mg.leg.br/imagens/copy_of_face.png/image'}
                    alt='Facebook'
                />
                <img
                    onClick={this.props.mensagemCompartilhamento}
                    className={'iconeDeRedeSocial'}
                    src={'https://alociencia.com.br/wp-content/uploads/2016/07/twitter-logo.png'}
                    alt='Twitter'
                />
            </section>
            <section className={'inputPost'}>
                <textarea
                    value={this.props.textoDoPost}
                    onChange={this.props.onChangeTextoDoPost}
                    rows='5' cols='10'
                    className={'texto-do-post'}
                    placeholder="Coloque aqui o texto do seu post..."
                />
            </section>
        </main>
    }
}