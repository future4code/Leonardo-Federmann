## RESPOSTAS DAS QUESTÕES PROPOSTAS

### 1
- **a-)** Round transforma para o tipo number uma variável proveniente do .env chamada COST, cujo objetivo é elevar a segurança da criptografia por meio do aumento proposital do tempo de rodagem do algoritmo, o que evita o rainbow table. SALT é uma string aleatória gerada a partir do COST que será colocada na senha antes da geração do hash, de modo a elevar sua proteção. Para o round, recomenda-se usar valores próximos a 10, capazes de já elevar satisfatoriamente a segurança da senha sem prejudicar a experiência do usuário. O valor que utilizei foi 12 (salvo no arquivo .env), bastante utilizado em libs desse tipo.

- **b e c-)** Ambas as funções foram criadas no arquivo hashManager, na pasta MIDDLEWARES. 

### 2
- **a-)** Devo modificar primeiramente o signup, de modo a criar usuários cuja senha esteja criptografada, uma vez que os usuários já existentes ainda não possuem esse recurso. 

- **b e c-)** Alterações realizadas em seus respectivos arquivos.

- **d-)** Tal endpoint não utilizada senha e, logo, não requer alterações. 

### 3
- **a-)** Coluna criada por meio da query:
ALTER TABLE User
ADD role ENUM('NORMAL', 'ADMIN') DEFAULT 'NORMAL';

- **b, c e d-)** Alterações realizadas.

### 4
- **a-)** Alteração realizada.

### 5
Endpoint criado com sucesso.

### 6
Tal endpoint já existe e é apresentado no arquivo getUser, na pasta ENDPOINTS.

### 7
Não consegui visualizar o enunciado do desafio (talvez por problema no carregamento do site). 