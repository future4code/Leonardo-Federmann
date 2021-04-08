## ASTROMATCH

Link para o site criado por meio so surge: http://astromatch-leonardo.surge.sh/   
Projeto em React criado para uma atividade do curso de programação da Labenu com o intuito de ser uma simulação de um aplicativo de encontros online, similar ao Tinder. Os perfis utilizados são fictícios e se encontram na seguinte API, que serviu de base para a elaboração do site:

https://documenter.getpostman.com/view/7549981/SW12yx56?version=latest  

Primeiramente, no topo da tela, se encontra um header com um logotipo fictício na lateral esquerda e um botão na direita, por meio do qual é possível mudar de página. Ademais, a aplicação possui duas páginas:  

A primeira, à qual se refere o arquivo **SeeOptions.js**, é uma página de opções, na qual se visualiza, um a um e em ordem aleatória, os perfis disponíveis na API. Cada perfil é acompanhado de uma foto, o nome, a idade e uma breve descrição do indivíduo. Logo abaixo, são exibidos quatro botões, dispostos horizontalmente:
- O primeiro, de 'deslike', por meio do qual o usuário rejeita o dado perfil, sendo, logo após, renderizado outro;
- O segundo, de 'match', por meio do qual o usuário adiciona o dado perfil a uma lista de matches (exibida na segunda página), sendo logo após renderizado outro perfil;
- O terceiro, de indecisão, por meio do qual o usuário opta por não dar 'deslike' nem 'match' no dado perfil, apenas por visualizar outro. Salienta-se que o perfil no qual esse botão foi clicado pode ser exibido novamente;
- O quarto, de 'limpar', por meio do qual são desfeitos todos os matches e visualizações - e, por conseguinte, a lista de matches exibida na segunda página é esvaziada -, reiniciando as funcionalidades da aplicação.

A segunda, à qual se refere o arquivo **SeeMatches.js**, exibe uma lista de todos os perfis nos quais o usuário deu match e que, também, lhe deram match. Ocorre que a API realiza um sorteio para averiguar, aleatoriamente, se o perfil fictício no qual o usuário deu match irá lhe dar match de volta ou não. Em caso afirmativo, o perfil será adicionado à referida lista; caso contrário, não o será. Tal página também possui o botão de 'limpar' supracitado.

Em ambas as páginas, enquanto as funcionalidades relacionadas à API ainda estiverem em andamento, será exibido um símbolo de coração com uma animação que simula o batimento cardíaco, expressando ao usuário que a página ainda está em carregamento. Tal símbolo também é exibido:
- Na página de opções, quando todos os perfis já tiverem sido exibidos e o usuário já tiver rejeitado ou dado match em todos. Nesse caso, será necessário pressionar o botão de 'limpar' para reiniciar a aplicação e a API;
- Na página de matches, quando a lista estiver vazia. 

### REQUISITOS TÉCNICOS

A atividade aspirou ao exercício dos aprendizados relativos à criação de aplicações em React, utilizando, enfaticamente, componentes funcionais e Hooks. Isto posto, não foram usados componentes de classe.  
Além disso, visando à organização do código, foi realizada a componentização dos arquivos **SeeOptions.js** e **SeeMatches.js**, divindindo-os em partes presentes na pasta 'Components'. Toda a estilização do site também se encontra em dois arquivos a parte, ambos de nome **style.js**: um na pasta 'Pages' (que contém os dois arquivos relativos às páginas do site, estilizando-os) e um na pasta 'Components' (estilizando os componentes usados).
Ressalta-se ainda que o arquivo **App.js** possui apenas a funcionalidade de troca de páginas, estando todas as demais inseridas nos outros.

### O QUE FUNCIONA

Todas as funcionalidades e animações supracitadas estão em pleno desempenho. A página também está responsiva, sendo que, em desktop, o container principal (com todos os elementos da aplicação) adotará o tamanho aproximado de um IPhone (largura de 375px), sendo exibida uma tela de fundo azul logo atrás, apenas com fins ilustrativos; em mobile, tal container principal preencherá toda a tela.  
Ademais, foram utilizadas as seguintes animações:
- O botão de mudar de página, presente no header, encolherá levemente quando o usuário levar o cursor a sua posição;
- Ao abrir a página de perfis, a exibição do primeiro perfil será acompanhada de uma animação com uma translação que o posicionará, bem como um aumento progressivo de opacidade.

### O QUE NÃO FUNCIONA

Não foi utilizada nenhuma funcionalidade de scroll. Portanto, caso seja adicionada uma quantidade demasiada de perfis à lista de matches, ela irá ultrapassar o limite inferior do container principal, posicionando parte dos perfis em um container vazio, com fundo branco.  
Ademais, por não haver padronização de tamanho, as imagens de alguns perfis encontram-se levemente distorcidas. 

  

