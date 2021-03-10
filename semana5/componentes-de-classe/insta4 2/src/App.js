import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>

        {/* Item 1: criar 3 posts, cada um com um nome, foto de usuário e foto de post diferente: */}
        <Post
          nomeUsuario={'Peter Parker'}
          fotoUsuario={'https://t2.tudocdn.net/492362?w=550&h=550'}
          fotoPost={'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2019/07/Homem-Aranha.jpg'}
        />
        <Post
          nomeUsuario={'Tony Stark'}
          fotoUsuario={'https://terrafm94.com.br/wp-content/uploads/2018/05/Robert-Downey-Jr-homem-de-ferro.jpg'}
          fotoPost={'https://s2.glbimg.com/V5yb5rCEWPNyb4PP0lncRpWyeL4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/J/6/OYDoBRSfOFGfZkQ8wbBg/captura-de-tela-2020-06-26-as-13.00.25.png'}
        />
        <Post
          nomeUsuario={'Thor'}
          fotoUsuario={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/ThorChris_VingadoresUltimatoDestaque.jpg'}
          fotoPost={'https://ibcdn.canaltech.com.br/GJTugbDh4mqbeNTeJFPuztnY6SY=/512x288/smart/i392169.jpeg'}
        />
      </div>
    );
  }
}

export default App;
