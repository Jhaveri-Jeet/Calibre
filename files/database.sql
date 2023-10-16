DROP DATABASE IF EXISTS `triotronics`;
CREATE DATABASE `triotronics`;
USE `triotronics`;

CREATE TABLE `Users`
(
    `Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Username` VARCHAR(50) NOT NULL,
    `Password` VARCHAR(500) NOT NULL
);

CREATE TABLE `Business`
(
    `Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Title` VARCHAR(500) NOT NULL,
    `Description` VARCHAR(2000) NOT NULL
);

CREATE TABLE `Products`
(
    `Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(200) NOT NULL,
    `Description` VARCHAR(2000) NOT NULL,
    `ImageName` VARCHAR(300) NOT NULL,
    `BusinessId` Int NOT NULL,

    CONSTRAINT `FkBusinessIdInProducts` FOREIGN KEY (`BusinessId`) REFERENCES `Business`(`Id`)
);

