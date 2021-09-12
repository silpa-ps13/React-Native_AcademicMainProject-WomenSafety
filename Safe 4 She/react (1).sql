-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2021 at 04:29 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react`
--

-- --------------------------------------------------------

--
-- Table structure for table `react_test`
--

CREATE TABLE `react_test` (
  `login_id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `react_test`
--

INSERT INTO `react_test` (`login_id`, `username`, `password`) VALUES
(1, 'abcd', '1234'),
(2, 'user1', '12345'),
(3, 'abks', 'a123'),
(4, 'abks', 'a123'),
(5, 'abks', 'a123'),
(6, 'abks', 'a123');

-- --------------------------------------------------------

--
-- Table structure for table `reg_table`
--

CREATE TABLE `reg_table` (
  `User_id` int(50) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Place` varchar(100) NOT NULL,
  `Phno` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Psw` varchar(100) NOT NULL,
  `Impath` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reg_table`
--

INSERT INTO `reg_table` (`User_id`, `Name`, `Place`, `Phno`, `Email`, `Psw`, `Impath`) VALUES
(7, 'Abhinav', 'Perambra', '8452587965', 'abhinavtp3@gmail.com', '1111', ''),
(8, 'Abhijith', 'Kannur', '9658525458', 'abhijith@gmail.com', '123123', NULL),
(9, 'Hareesh', 'Trissur', '8569858563', 'hareesh@gmail.com', '1234', 'file:///data/user/0/com.women_safety/cache/rn_image_picker_lib_temp_253def38-f736-4bb9-b032-2a36690df753.jpg'),
(10, 'Dilsha', 'Kozhikode', '8565845256', 'dilu@gmail.com', '12345', NULL),
(11, 'Arjun', 'Malappuram', '8548563254', 'arjun@gmail.com', 'Arj123', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `react_test`
--
ALTER TABLE `react_test`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `reg_table`
--
ALTER TABLE `reg_table`
  ADD PRIMARY KEY (`User_id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `react_test`
--
ALTER TABLE `react_test`
  MODIFY `login_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `reg_table`
--
ALTER TABLE `reg_table`
  MODIFY `User_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
