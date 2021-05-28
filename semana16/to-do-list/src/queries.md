## Queries usadas para este banco de dados

### Criação da tabela de usuários
CREATE TABLE list_users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE
);

### Criação da tabela de tarefas
CREATE TABLE list_tasks(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
deadline DATE NOT NULL,
requester_id INT NOT NULL,
status ENUM("to do", "doing", "done") DEFAULT "to do",
FOREIGN KEY (requester_id) REFERENCES list_users(id)
);

### Criação da tabela de junção entre tarefas e usuários responsáveis pela sua execução
CREATE TABLE assigned_users (
user_id INT NOT NULL,
task_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES list_users(id),
FOREIGN KEY (task_id) REFERENCES list_tasks(id)
);
