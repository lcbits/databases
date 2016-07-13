CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  userid int NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY username (username)
);

ALTER TABLE messages ADD FOREIGN KEY (userid) REFERENCES users (id);

--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

