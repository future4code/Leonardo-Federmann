## RESPOSTAS DAS QUESTÕES PROPOSTAS

### 1
Função criada na pasta FUNCTIONS.

### 2
Tabela criada por meio da query:
CREATE TABLE address(
user_id VARCHAR(255) NOT NULL PRIMARY KEY,
cep VARCHAR(8) NOT NULL,
logradouro VARCHAR(255) NOT NULL,
numero INT NOT NULL,
complemento VARCHAR(255) DEFAULT "",
bairro VARCHAR(255) NOT NULL,
cidade VARCHAR(255) NOT NULL,
estado VARCHAR(2) NOT NULL,
FOREIGN KEY (user_id) REFERENCES User(id)
);

### 3
Alterações realizadas.