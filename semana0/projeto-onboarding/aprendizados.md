#Aprendizados da semana

Começamos a semana recebendo algumas orientações iniciais sobre como o curso funcionaria, os módulos que seriam abordados ao longo dos 6 meses na Labenu, o cronograma semanal, boas práticas para a realização das atividades e a comunicação e afins. Logo depois, na quarta-feira, aprendemos os conceitos introdutórios do **terminal**, dentre os quais estão:
-Diferença entre **interface terminal**, na qual inserimos códigos e comandos que irão reger as ações do computador, e a **interface gráfica**, que traduz a sequência de comandos do terminal para uma linguagem mais visual e facilmente compreensível para usuários leigos em programação;
-Definição de alguns itens do computador, como processador, memória, programa e sistema operacional;
-Diferença entre argumentos (valores inseridos pelo usuário) e opções (comandos opcionais que levarão a novas ações no terminal);
-Alguns comandos básicos, tais como: whoami, que mostra o usuário atual; pwd, que mostra a pasta na qual você se encontra; ls, que lista todos os arquivos e subdiretórios no diretório ativo; cd, que permite ingressar em um subdiretório presente naquela pasta (sendo uma de suas variantes o cd .., que permite retornar ao diretório anterior); touch, que cria um novo arquivo; mkdir, que cria uma nova pasta; cat, que exibe todo o conteúdo de um arquivo indicado; head -n e tail -n, que mostram, respectivamente, as n primeiras e últimas linhas de um arquivo indicado; grep, que busca um valor específico em um arquivo e imprime sua linha no terminal, sendo algumas de suas variações o grep -A, o grep -B (que mostram algumas linhas, respectivamente, abaixo e acima da linha buscada), grep -r (busca o valor não somente em um arquivo específico, mas em todos os arquivos e subdiretórios naquele diretório atual) e grep -c (que conta todas as vezes que o valor buscado aparece no arquivo indicado).

Posteriormente, na quinta-feira, tivemos a aula introdutório sobre o **Git** e **GitHub**, na qual aprendemos alguns comandos específicos para criação de árvores de trabalho por meio do terminal e como relacioná-las ao GitHub (plataforma online que permite armazenamento, compartilhamento e edição conjunta de códigos via Git - muito similar ao Google Drive). Alguns dos aprendizados desse dia foram:
-Definição de versionamento, a criação de várias versões de um mesmo **repositório** (projeto em programação) conforme o avanço de sua elaboração, por questões de segurança e backup;
-Ferramentas iniciais do GitHub, como a criação de novos repositórios e de PR (Pull Requests, o requerimento para que outro usuário ou membro do time revise e aprove a alteração realizada na árvore de trabalho);
-Comandos básicos do Git, tais como: git clone, que permite importar um repositório do GitHub em um diretório local; git add, que adiciona alguma alteração na árvore de trabalho à **staging area**, uma área de transição entre o Git e o GitHub, necessária para enviar tais alterações à web; git commit -m, que permite "commitar", ou seja, criar uma descrição da alteração realizada; git status, que mostra se alguma alteração necessita ser commitada ou inclusa na staging area; git commit, que permite a criação de uma nova commit (um "marco", uma alteração) na branch (ou seja, no "galho da árvore") na qual você se encontra; git branch, que lista todos os galhos da árvore (inclusive o "tronco", o galho principal, chamado também de main ou master), git branch nomedabranch, que cria uma nova branch; git checkout, que permite acessar uma nova branch; git checkout -b, que cria e ao mesmo tempo acessa uma nova branch; git push origin, que envia as alterações realizadas em uma branch ao GitHub (devendo-se, logo após, abrir uma PR para sua aprovação); git pull origin, que permite importar as alterações aprovadas no GitHub de volta no Git local (sendo ambos os comandos necessários para incluir as mudanças na branch à main), dentre outros.

Finalmente, na sexta-feira, tivemos um lembrete sobre as orientações iniciais do curso e aprendemos a utilizar o **VS Code**, ferramenta que permite o acesso e a edição de arquivos a partir de um diretório e de uma branch da árvore de trabalho. Iremos utilizá-la bastante nos próximos meses para editar arquivos em variadas linguagens, como HTML, CSS e JavaScript. 