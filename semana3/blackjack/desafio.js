//BLACKJACK - AVANÇADO
console.log('')
console.log('%c BEM VINDO AO JOGO DE BLACKJACK! \u{2660} \u{2663} \u{2665} \u{2666} ', 'background-color:black; color:white')
console.log('%c Esse é mais avançado. Você está preparado?', 'background-color:black; color:white', '\u{1F60E}')
console.log('%c Shall we play a game? \u{1F608} ', 'color:red')
console.log('')

//Pergunta-se se o usuário deseja jogar. Caso não queira, não haverá jogo:

let pergunta = confirm('Bem vindo ao jogo de BlackJack! Você quer jogar? \u{1F608}')
if (pergunta === false) {
   console.log('Tudo bem! Fica para a próxima. \u{1F609}')

   //Caso queira, o jogo será iniciado:

} else {

   //O while a seguir refere-se a novas rodadas do jogo. Ou seja, ele foi colocado para que,
   //após uma partida, o computador pergunte ao usuário se ele deseja jogar mais uma.
   //Caso deseje, o jogo prosseguirá. Caso contrário, o jogo terminará com uma "despedida" do computador:
   while (pergunta === true) {
      let computador = [comprarCarta(), comprarCarta()]
      let usuario = [comprarCarta(), comprarCarta()]

      //ITEM 8: se as cartas sorteadas por um jogador forem dois As, deve-se sorteá-las novamente.
      //O sorteio de dois As é a única situação na qual a soma dos valores das duas cartas supera 21.
      //Por conseguinte, usa-se esse fato como condição de continuação para o while:

      while (computador[0].valor + computador[1].valor > 21) {
         computador = [comprarCarta(), comprarCarta()]
      }
      while (usuario[0].valor + usuario[1].valor > 21) {
         usuario = [comprarCarta(), comprarCarta()]
      }

      //ITEM 9: todas as cartas do usuário serão reveladas, enquanto apenas a primeira carta do computador o será:
      console.log('Suas cartas são: ' + usuario[0].texto + ' ' + usuario[1].texto)
      console.log('A carta revelada do computador é: ' + computador[0].texto)
      console.log('')


      //ITEM 10: permite-se que o usuário compre mais cartas enquanto desejar ou até ultrapassar 21 pontos.
      //O valor de cada carta será somado ao total de sua pontuação.
      //Para isso, são declaradas as variáveis abaixo e usa-se o seguinte while:
      let totalUsu = usuario[0].valor + usuario[1].valor
      let cartasUsu = usuario[0].texto + ' ' + usuario[1].texto + ' '
      while (totalUsu <= 21) {
         //ITEM 9 (CONTINUAÇÃO): pergunta-se ao usuário se ele deseja comprar mais cartas:
         if (confirm('Ainda dá para comprar mais uma carta. Deseja comprar?') === true) {
            usuario.push(comprarCarta())
            totalUsu += usuario[usuario.length - 1].valor
            cartasUsu += usuario[usuario.length - 1].texto + ' '
            console.log('Suas cartas são: ' + cartasUsu)
            console.log('A carta revelada do computador é: ' + computador[0].texto)
            console.log('')
         } else { break }
      }

      //ITEM 10 (CONTINUAÇÃO) E ITEM 12: verifica-se se a pontuação do usuário superou o limite de 21.
      //Se sim, o jogo será interrompido e o usuário terá perdido.
      //Caso contrário, o jogo prosseguirá:
      if (totalUsu > 21) {
         console.log('Sua pontuação é ' + totalUsu + ', maior que o limite de 21.')
         console.log('%c EU VENCI HEHEHEHE ', 'background-color:red; color:white', '\u{1F60E}')
      } else {

         //ITEM 11: compra de cartas do computador até que sua pontuação se iguale a ou supere a do usuário.
         let totalComp = computador[0].valor + computador[1].valor
         let cartasComp = computador[0].texto + ' ' + computador[1].texto + ' '
         while (totalComp < totalUsu) {
            computador.push(comprarCarta())
            totalComp += computador[computador.length - 1].valor
            cartasComp += computador[computador.length - 1].texto + ' '
         }

         //Exibição das cartas e pontuações finais do usuário e do computador:
         console.log('Suas cartas finais são: ' + cartasUsu + ', com uma pontuação de: ' + totalUsu)
         console.log('As cartas do computador são: ' + cartasComp + ', com uma pontuação de: ' + totalComp)
         console.log('')

         //ITEM 12 (CONTINUAÇÃO): verifica-se quem é o vencedor:
         if (totalComp > 21) {
            console.log('A pontuação do computador ultrapassou o limite de 21.')
            console.log('%c VOCÊ GANHOU! Parabéns! ', 'background-color:green; color:white', '\u{1F600}')
         } else if (totalComp > totalUsu) {
            console.log('A pontuação do computador superou a sua.')
            console.log('%c EU VENCI HEHEHEHE ', 'background-color:red; color:white', '\u{1F60E}')
         } else {
            console.log('As pontuações são iguais.')
            console.log('%c EMPATE! Foi um bom jogo. ', 'background-color:blue; color:white', '\u{1F609}')
         }
      }

      //Condições para que o usuário escolha se deseja continuar jogando ou não:
      pergunta = confirm('Vai mais uma? \u{1F607}')
      if (pergunta === true) {
         console.log('')
         console.log('NOVA RODADA')
         console.log('')
      }
   }

   //Despedida para o caso de o usuário não mais desejar jogar:
   console.log('')
   console.log('Valeu e até a próxima! \u{1F609}')
}