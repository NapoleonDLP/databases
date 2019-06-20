drop database chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE IF NOT EXISTS messages (
 id INT AUTO_INCREMENT,
 user_id VARCHAR(100),
 room_id VARCHAR(100),
 message TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT,
 name VARCHAR(300),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rooms (
 id INT AUTO_INCREMENT,
 name VARCHAR(300),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root <
 *  to create the database and the tables.*/

