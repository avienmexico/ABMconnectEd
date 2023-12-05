-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2023 at 03:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userclick`
--

-- --------------------------------------------------------

--
-- Table structure for table `landing`
--

CREATE TABLE `landing` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question1`
--

CREATE TABLE `question1` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question2`
--

CREATE TABLE `question2` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question3`
--

CREATE TABLE `question3` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question4`
--

CREATE TABLE `question4` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question5`
--

CREATE TABLE `question5` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question6`
--

CREATE TABLE `question6` (
  `user` int(11) NOT NULL,
  `click` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `landing`
--
ALTER TABLE `landing`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question1`
--
ALTER TABLE `question1`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question2`
--
ALTER TABLE `question2`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question3`
--
ALTER TABLE `question3`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question4`
--
ALTER TABLE `question4`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question5`
--
ALTER TABLE `question5`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `question6`
--
ALTER TABLE `question6`
  ADD PRIMARY KEY (`user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `landing`
--
ALTER TABLE `landing`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question1`
--
ALTER TABLE `question1`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question2`
--
ALTER TABLE `question2`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question3`
--
ALTER TABLE `question3`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question4`
--
ALTER TABLE `question4`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question5`
--
ALTER TABLE `question5`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question6`
--
ALTER TABLE `question6`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
