/*USED QUERIES FOR DATABASE TABLES CREATION*/

CREATE TABLE cookenu_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password TEXT NOT NULL
);

ALTER TABLE cookenu_users
ADD role ENUM("BEGINNER", "INTERMEDIATE", "CHEF") DEFAULT "BEGINNER";

CREATE TABLE cookenu_recipes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
creation_date DATE NOT NULL,
creator_id VARCHAR(255) NOT NULL,
FOREIGN KEY (creator_id) REFERENCES cookenu_users(id)
);

CREATE TABLE cookenu_follow_users (
following_user VARCHAR(255) NOT NULL,
followed_user VARCHAR(255) NOT NULL,
FOREIGN KEY (following_user) REFERENCES cookenu_users(id),
FOREIGN KEY (followed_user) REFERENCES cookenu_users(id)
);