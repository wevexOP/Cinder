DROP DATABASE IF EXISTS devlove;
CREATE DATABASE devlove;
USE devlove;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE DEFAULT '0',
    `password` varchar(255) NOT NULL UNIQUE DEFAULT '0',
    `display_name` VARCHAR(255) NOT NULL AUTO_INCREMENT UNIQUE,
    `gender` INT NOT NULL DEFAULT '0',
    `dating_status` INT NOT NULL DEFAULT '0',
    `zip_code` INT NOT NULL DEFAULT '0',
    `bio` TEXT DEFAULT '0',
    `langs` varchar(255) NOT NULL DEFAULT '00000000000',
    PRIMARY KEY (`id`)
);

CREATE TABLE `swipes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user1` INT,
    `user2` INT,
    `value` BINARY NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `matches` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user1` INT NOT NULL,
    `user2` INT NOT NULL,
    `timestamp` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `swipes` ADD CONSTRAINT `swipes_fk0` FOREIGN KEY (`user1`) REFERENCES `users`(`id`);

ALTER TABLE `swipes` ADD CONSTRAINT `swipes_fk1` FOREIGN KEY (`user2`) REFERENCES `users`(`id`);

ALTER TABLE `matches` ADD CONSTRAINT `matches_fk0` FOREIGN KEY (`user1`) REFERENCES `users`(`id`);

ALTER TABLE `matches` ADD CONSTRAINT `matches_fk1` FOREIGN KEY (`user2`) REFERENCES `users`(`id`);