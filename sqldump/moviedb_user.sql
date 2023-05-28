-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: moviedb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `isVerified` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test123@test.com','$2b$10$M.itfFhkYWKZJ1DHsRPJBegijZbY5QCAhRYxRC2ipsE4JPqQ3Kpi2','fname','lname',0),(3,'test12345@test.com','$2b$10$7QjokTT8HijvIoc4YCJVlOsD/bC9SiT/Zu8R1z1UUxZDs00tPim6K','fname','lname',0),(4,'test111@test.com','$2b$10$9hTC6bfXyrjGivhsLVkbV.O4iQMEHjNbv3kUmVlguBy4QRlilUBBC','fname','lname',1),(5,'libbie65@ethereal.email','$2b$10$MWwU3p9BDuxglPdnUc8/5uuvAhzw6r8amE0eCsLnURp76Ij9CMLQe','fname','lname',0),(8,'test333@test.com','$2b$10$ZF8YUEiJuIAr6AUIg9AkVOFgR04LLWniRBZZysyYf/hdjMh4qLgmG','fname','lname',0),(10,'test555@test.com','$2b$10$lb5ZjKSdoKveo29bmCpuvech8KR3.TmsRoi0Tu7FO.hWsqzZ.8pJa','fname','lname',0),(12,'test666@test.com','$2b$10$MSG23bF93lmQ0XzP5BR.D.qKnXMIsr5tWS9iGniL.GuGTc.qZ81p.','fname','lname',0),(13,'test777@test.com','$2b$10$5gA89HTsQZ9UgrfZXjVh5.XNjq8FYwuGiw2llX1stVHuG4Ci8ks2S','fname','lname',1),(14,'test888@test.com','$2b$10$hHzQG12Ev9hDay1GmEwTlO8D8Iq.hjZqirs5OwFDGszvsQIyQA3pu','fname','lname',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28 11:48:53
