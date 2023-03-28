-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-03-2023 a las 18:21:47
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoutncoffedesign`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Logotipo (Café)', '¡Ven y descubre el sabor intenso de nuestro café con nuestro nuevo y ardiente logo!', 'En nuestra empresa de café rápido, sabemos que el tiempo es valioso, y es por eso que ofrecemos un servicio rápido y eficiente sin sacrificar la calidad de nuestro café. Con nuestro nuevo logo, estamos más comprometidos que nunca en brindarte una experiencia de café excepcional en cualquier momento del día.\r\nNuestra copa del mundo, nuestro tango, nuestro mate, nuestro obelisco, nuestro vino y más.', 'x86jcqq5qmjewfeqoneq'),
(5, 'Coffee is love', '¡Lo amamos todos!', 'Diseño de logotipo creativo, utilizando la letra C. (inicial de la palabra Café)\r\nAdemás integramos una taza caliente al diseño que encaja perfectamente.', 'nkdpkg19dw6mjkskmgye'),
(19, 'Logotipo (Café)', '¡Ven y prueba el sabor excepcional del café con nuestro nuevo logo!', '¡Presentamos el nuevo logo de café! Un símbolo de calidad y sabor que seguramente satisfará hasta los amantes del café más exigentes. Nuestro logo captura la esencia de una buena taza de café: rica, sabrosa y aromática. Con cada sorbo, experimentarás la combinación perfecta de suavidad y audacia, un sabor simplemente inolvidable.', 'wpyxzcrlfhgy5juxh5tj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Santiago', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Laya', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
