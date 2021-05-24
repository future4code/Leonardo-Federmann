## RESPOSTAS DOS EXERCÍCIOS

### 1
CREATE TABLE actor(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(9) NOT NULL
);

DELETE FROM actor;
DROP TABLE actor;
SHOW DATABASES;
SHOW TABLES;
DESCRIBE actor;

- **a-)** A restrição VARCHAR(X) refere-se a uma string que contenha até X caracteres (9 no caso do sexo - valor inserido para possibilitar, também, a inserção de male e female em português - e 255 nos demais) e DATE refere-se à criação de uma data. Ademais, PRIMARY KEY refere-se à criação de um chave primária de identificação do item e NOT NULL, a um item de preenchimento obrigatório da tabela. 
- **b-)** Com tais comandos, somente os nomes do banco de dados e da tabela de atores são exibidos. A tabela em si ainda não é mostrada.
- **c-)** É exibida a tabela de atores. Contudo, ela não possui nenhum valor, somente os tipos das informações criadas, se são do tipo null e se são a primary key. As informações são exibidas em linhas, não em colunas. 

### 2

INSERT INTO actor (id, nome, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
400000,
"1948-08-05",
"male"
),(
"002",
"Glória Pires",
"1200000",
"1963-08-23",
"female"
);

INSERT INTO actor (id, nome, salary, birth_date, gender)
VALUES (
"002",
"Robert Downey Junior",
400000,
"1950-08-05",
"male"
);

INSERT INTO actor (id, nome, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO actor (id, nome, salary, birth_date, gender)
VALUES(
  "004",
  "Chirs Evans",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO actor
VALUES (
"006",
"Elizabeth Olsen",
200000,
"1985-09-27",
"female"
),(
"007",
"Paul Bethany",
200000,
"1975-02-26",
"male"
);

- **a-)** Linha criada 
- **b-)** A mensagem de erro diz que uma chave primária não pode ser duplicada, o que tentei fazer com o id 002.
- **c-)** Há menos colunas especificadas que valores. Logo, ambas as quantidades não estão iguais, como deveriam ser. O código corrigido é exibido acima. 
- **d-)** O nome não está preenchido. O código corrigido é exibido acima.
- **e-)** O campo de data não está sendo lido, o que aparentemente ocorreu pelo fato de ela não estar entre parânteses. O código corrigido é exibido acima. 

### 3

- **a-)** SELECT * FROM actor WHERE gender="female";
- **b-)** SELECT salary FROM actor WHERE nome="Tony Ramos";
- **c-)** SELECT * FROM actor WHERE gender="invalid"; ==> é mostrada uma linha com valores null em todas as células.
- **d-)** SELECT id, nome, salary FROM actor WHERE salary<=500000;
- **e-)** O único erro que existia era a ausência de ponto e vírgula. Corrigido tal erro, a query rodou normalmente: SELECT id, nome from actor WHERE id = "002";

### 4

SELECT * FROM actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary>300000;

- **a-)** A query verifica quais atores possuem salário maior que R$300.000,00 e cujos nomes comecem com A ou J. Para isso, é inserida a expressão condicional indicada, que busca os atores com nomes começando ou A ou J e, ao mesmo tempo, possuem salário na faixa indicada. 
- **b-)** SELECT * FROM actor WHERE nome NOT LIKE "A%" AND salary>350000;
- **c-)** SELECT * FROM actor WHERE nome LIKE "%g%" OR nome LIKE "%G%";
- **d-)** SELECT * FROM actor WHERE (nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%") AND (salary>=350000 AND salary<=900000);

### 5

- **a-)** CREATE TABLE movies(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
evaluation INT NOT NULL
);

A query criará uma tabela com as colunas: id (deve ser uma string com até 255 caracteres, sendo a chave primária), nome (string com até 255 caracteres e não podendo ser repetido), sinopse (tipo texto), data de lançamento (tipo DATE) e avaliação (número inteiro), sendo todos os campos de preenchimento obrigatório.

- **b, c, d, e-)** 
INSERT INTO movies 
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
),(
"002",
"Doce mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),(
"004",
"Até que a sorte nos separe",
"Acompanhe esse casal doido da riqueza à falência.",
"2012-10-05",
10
);

### 6

- **a-)** SELECT id, nome, evaluation FROM movies WHERE id="004";
- **b-)** SELECT * FROM movies WHERE nome="Até que a sorte nos separe";
- **c-)** SELECT id, nome, synopsis FROM movies WHERE evaluation>=7;

### 7

- **a-)** SELECT * FROM movies WHERE nome LIKE "%vida%";
- **b-)** SELECT * FROM movies WHERE nome LIKE "%doce%" OR nome LIKE "%doce%";
- **c-)** SELECT * FROM movies WHERE release_date<"2021-05-24"; ==> 24/05/2021 é o dia de realização desta atividade.
- **d-)** SELECT * FROM movies WHERE release_date<"2021-05-24" AND (nome LIKE "%doce%" OR synopsis LIKE "%doce%") AND evaluation>7;

