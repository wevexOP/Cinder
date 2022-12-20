DROP DATABASE IF EXISTS users;
CREATE DATABASE users;;
USE users;
CREATE TABLE Relationship (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE gender (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  gender_id INT UNSIGNED NOT NULL,
  INDEX gen_ind (gender_id),
  CONSTRAINT fk_gender FOREIGN KEY (gender_id) REFERENCES gender(id) ON DELETE CASCADE
);
CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  INDEX user_ind (user_id),
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
use users;
INSERT INTO Relationship
    (name)
VALUES
    ('Looking for Relationship'),
    ('Looking for Marriage'),
    ('Looking for Friends'),
    ('Hookups plz');
INSERT INTO role
    (title, salary, Relationship_id)
VALUES
    ('Looking for Relationship', 1, 1),
    ('Looking for Relationship', 4, 1),
    ('Looking for Marriage', 1, 2),
    ('Looking for Marriage', 8, 2),
    ('Looking for Friends', 7, 3),
    ('Looking for Friends', 3, 3),
    ('Hookups plz', 4, 4),
    ('Hookups plz', 2, 4);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Dominic', 'Paulazzo', 1, NULL),
    ('Ken', 'Chappy', 2, 1),
    ('Elon', 'Musk', 3, NULL),
    ('King', 'Romulus', 4, 3),
    ('Charlie', 'Chocolate', 5, NULL),
    ('Larry', 'Lumpy', 6, 5),
    ('Hugh', 'Mongus', 7, NULL),
    ('Pine', 'Apple', 8, 7);
    
