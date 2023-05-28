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
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `plot` varchar(255) NOT NULL,
  `runtime` varchar(255) NOT NULL,
  `actors` varchar(255) NOT NULL,
  `released` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `rated` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `poster` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Avatar','A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.','162 min','Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang','18 Dec 2009','7.9','PG-13','James Cameron','Action, Adventure, Fantasy','http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'),(2,'I Am Legend','Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.','101 min','Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield','14 Dec 2007','7.2','PG-13','Francis Lawrence','Drama, Horror, Sci-Fi','http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg'),(3,'300','King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.','117 min','Gerard Butler, Lena Headey, Dominic West, David Wenham','09 Mar 2007','7.7','R','Zack Snyder','Action, Drama, Fantasy','http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg'),(4,'The Avengers','Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.','143 min','Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth','04 May 2012','8.1','PG-13','Joss Whedon','Action, Sci-Fi, Thriller','http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg'),(5,'The Wolf of Wall Street','Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.','180 min','Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey','25 Dec 2013','8.2','R','Martin Scorsese','Biography, Comedy, Crime','http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg'),(6,'Interstellar','A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.','169 min','Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow','07 Nov 2014','8.6','PG-13','Christopher Nolan','Adventure, Drama, Sci-Fi','http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg'),(7,'Game of Thrones','While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.','56 min','Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington','17 Apr 2011','9.5','TV-MA','N/A','Adventure, Drama, Fantasy','http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg'),(8,'Vikings','The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.','44 min','Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick','03 Mar 2013','8.6','TV-14','N/A','Action, Drama, History','http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg'),(9,'Gotham','The story behind Detective James Gordon\'s rise to prominence in Gotham City in the years before Batman\'s arrival.','42 min','Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee','01 Aug 2014','8.0','TV-14','N/A','Action, Crime, Drama','http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg'),(10,'Power','James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.','50 min','Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren','N/A','8.0','TV-MA','N/A','Crime, Drama','http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg'),(11,'Narcos','A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.','49 min','Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie','28 Aug 2015','8.9','TV-MA','N/A','Biography, Crime, Drama','http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg'),(12,'Breaking Bad','A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s financial future.','49 min','Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris','20 Jan 2008','9.5','TV-14','N/A','Crime, Drama, Thriller','http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg'),(13,'Doctor Strange','After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.','N/A','Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton','04 Nov 2016','N/A','N/A','Scott Derrickson','Action, Adventure, Fantasy','http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'),(14,'Rogue One: A Star Wars Story','The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.','N/A','Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn','16 Dec 2016','N/A','N/A','Gareth Edwards','Action, Adventure, Sci-Fi','https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'),(15,'Assassin\'s Creed','When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.','N/A','Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons','21 Dec 2016','N/A','N/A','Justin Kurzel','Action, Adventure, Fantasy','http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg'),(16,'Luke Cage','Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.','55 min','Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey','30 Sep 2016','N/A','TV-MA','N/A','Action, Crime, Drama','http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
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
