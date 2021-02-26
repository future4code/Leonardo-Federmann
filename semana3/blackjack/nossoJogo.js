//BLACKJACK

//ITEM 1: impressão da mensagem "Bem vindo ao Blackjack"
console.log('%c BEM VINDO AO JOGO DE BLACKJACK! \u{2660} \u{2663} \u{2665} \u{2666} ', 'background-color:black; color:white')
console.log('%c Shall we play a game? \u{1F608} ', 'color:red')
console.log('')

//ITEM 2 E 3: pergunta-se se o usuário deseja jogar. Caso não queira, não haverá jogo:
let question = confirm('Bem vindo ao jogo de BlackJack! Você quer jogar? \u{1F608}')
if (question === false) {
   console.log('Tudo bem! Fica para a próxima. \u{1F609}')

   //ITEM 4: Caso queira, o jogo será iniciado:

} else {

   //O while a seguir refere-se a novas rodadas do jogo. Ou seja, ele foi colocado para que,
   //após uma partida, o computador pergunte ao usuário se ele deseja jogar mais uma.
   //Caso deseje, o jogo prosseguirá. Caso contrário, o jogo terminará com uma "despedida" do computador:
   while (question === true) {
      //ITEM 5: sorteio das cartas do usuário e do computador:
      let computador = [comprarCarta(), comprarCarta()]
      let usuario = [comprarCarta(), comprarCarta()]
      let totalComp = computador[0].valor + computador[1].valor
      let totalUsu = usuario[0].valor + usuario[1].valor

      //ITEM 6: exibição das cartas e da pontuação do usuário e do computador:
      console.log('As cartas do computador são: ' + computador[0].texto + ' e ' + computador[1].texto + ', com uma pontuação de: ' + totalComp)
      console.log('As suas cartas são: ' + usuario[0].texto + ' e ' + usuario[1].texto + ', com uma pontuação de: ' + totalUsu)

      //ITEM 7: indicação do vencedor:
      if (totalUsu > totalComp) {
         console.log('%c VOCÊ GANHOU! Parabéns! ', 'background-color:green; color:white', '\u{1F600}')
      } else if (totalComp > totalUsu) {
         console.log('%c EU VENCI HEHEHEHE ', 'background-color:red; color:white', '\u{1F60E}')
      } else {
         console.log('%c EMPATE! Foi um bom jogo. ', 'background-color:blue; color:white', '\u{1F609}')
      }

      //Condições para que o usuário escolha se deseja continuar jogando ou não:
      question = confirm('Vai mais uma? \u{1F607}')
      if (question === true) {
         console.log('')
         console.log('NOVA RODADA')
         console.log('')
      }
   }

   //Despedida do computador, caso o usuário deseje parar de jogar:
   console.log('')
   console.log('Valeu e até a próxima! \u{1F609}')
}