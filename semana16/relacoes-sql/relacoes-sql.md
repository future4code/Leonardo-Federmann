## RELAÇÕES EM SQL

### 1
- **a-)** Chave estrangeira é uma chave incluída ao se criar uma tabela no SQL por meio da qual é possível estabelecer uma ligação entre uma coluna da tabela que está sendo criada e outra coluna de uma tabela pré-existente. Assim, ambas as colunas passarão a se referir à mesma informação, sendo a da nova tabela dependente da da tabela pré-existente. 

- **b-)** 
INSERT INTO Rating
VALUES
("001", "Divertido e reflexivo", 8,"001"),
("002","Engraçadíssimo, morri de rir no cinema.", 9, "002"),
("003", "Me diverti do começo ao fim", 8, "003"),
("004", "Instrutivo e divertido", 10, "004");

- **c-)** 
INSERT INTO Rating
VALUES ("005", "Intrigante", 9, "005");

A mensagem de erro que aparece indica que a restrição relativa à chave estrangeira não permitiu adicionar a avaliação criada. 

- **d-)** 
ALTER TABLE movies
DROP COLUMN evaluation;

- **e-)** 
DELETE FROM movies WHERE id="001";

A mensagem de erro indica que a restrição relativa à chave estrangeira não permite apagar nem atualizar a uma "parent row", ou seja, uma linha atrelada ao outra tabela por meio dessa chave.

### 2

- **a-)** Na relação N:M, não é possível estabelecer uma conexão diretamente entre duas tabelas. É necessário haver uma tabela intermediária que conterá uma coluna da primeira tabela, uma coluna da segunda tabela e uma chave estrangeira para cada uma delas, estabelecendo, assim, uma ligação indireta entre as duas. Esse é o papel desempenhado pela tabela MovieCast, que estabelece tal ligação entre a tabela de filmes e a de atores. 

- **b-)** 
CREATE TABLE MovieCast(
movie_id VARCHAR (255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES movies(id),
FOREIGN KEY (actor_id) REFERENCES actor(id)
);

INSERT INTO MovieCast
VALUES 
("001", "001"),
("002", "002"),
("003", "004"),
("004", "005"),
("002", "007"),
("003", "002");

- **c-)** 
INSERT INTO MovieCast
VALUES("001", "014");

O erro exibido é o mesmo da questão 1, indicando que a chave estrangeira não permite a criação de uma linha cujo valor seja o de um id que não existe. 

- **d-)**
DELETE FROM actor WHERE id="001";

A mensagem exibida é a mesma do exercício 1, indicando que não se pode apagar nem atualizar uma "parent row" (uma linha) que esteja atrelada a outra tabela por meio de uma chave estrangeira. 

### 3

- **a-)** A query exibe as informações das duas tabelas, Movies e Rating. O ON indicará que as informações de ambas as tabelas devem ser exibidas de modo que uma coluna na tabela Movies seja correpondente a outra na  tabela Rating (no caso, Movies.id e Rating.movie_id, respectivamente). Assim, as informações referentes a uma mesma avaliação serão exibidas na mesma linha. 

- **b-)** 
SELECT movies.id AS "id", nome AS "filme", rate AS "nota" FROM movies JOIN Rating 
ON movies.id=Rating.movie_id;