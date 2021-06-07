## RESPOSTAS DAS QUESTÕES PROPOSTAS

### 1
- **a-)** As string possibilitam criar ids mais complexas (por exemplo, por meio do UUID), implicando em maior segurança e confidencialidade de seus valores. Por conseguinte, concordo que sejam uma opção mais apropriada. 

- **b-)** Criada na pasta MIDDLEWARES:
export function generateId():string{
    return v4()
}

### 2
- **a-)** Primeiramente, é estabelecida uma conexão entre o arquivo TS e o banco de dados em MySQL. Logo após, declara-se uma função assíncrona que, por meio de query builder, insere informações de id, email e senha de um usuário em uma tabela do banco de dados chamada userTableName. 

- **b-)** 
CREATE TABLE userTableName (
id VARCHAR(255) NOT NULL PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

- **c-)** Criada no arquivo createUser, na pasta ENDPOINTS. Ainda não foi utilizada a geração e verificação de token.

### 3
- **a-)** A linha garante que a variável JWT_ENV, proveniente do .env, será do tipo string. 
- **b-)** Criada no arquivo authenticator, na pasta MIDDLEWARES

### 4
Todos os itens foram realizados na função createUser, na pasta ENDPOINTS. Agora sim, a geração de id e token está sendo utilizada. 

### 5 e 6
Função e endpoint criados no arquivo login, na pasta ENDPOINTS, e no arquivo index.

### 7




