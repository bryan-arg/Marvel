USE [master]
GO
/****** Object:  Database [Marvel_DB]    Script Date: 22/05/2020 11:56:39 p.m. ******/
CREATE DATABASE [Marvel_DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Marvel_DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Marvel_DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Marvel_DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Marvel_DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Marvel_DB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Marvel_DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Marvel_DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Marvel_DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Marvel_DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Marvel_DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Marvel_DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [Marvel_DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Marvel_DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Marvel_DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Marvel_DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Marvel_DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Marvel_DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Marvel_DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Marvel_DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Marvel_DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Marvel_DB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Marvel_DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Marvel_DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Marvel_DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Marvel_DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Marvel_DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Marvel_DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Marvel_DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Marvel_DB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Marvel_DB] SET  MULTI_USER 
GO
ALTER DATABASE [Marvel_DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Marvel_DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Marvel_DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Marvel_DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Marvel_DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Marvel_DB] SET QUERY_STORE = OFF
GO
USE [Marvel_DB]
GO
/****** Object:  Table [dbo].[Compra]    Script Date: 22/05/2020 11:56:40 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Compra](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NULL,
	[documento] [int] NULL,
	[direccion] [varchar](30) NULL,
	[telefono] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Compradores]    Script Date: 22/05/2020 11:56:40 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Compradores](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NULL,
	[documento] [int] NULL,
	[direccion] [varchar](30) NULL,
	[telefono] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Compras]    Script Date: 22/05/2020 11:56:40 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Compras](
	[id] [int] NOT NULL,
	[no_Orden] [int] NULL,
	[total] [int] NULL,
	[fecha] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detalles_Compra]    Script Date: 22/05/2020 11:56:40 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalles_Compra](
	[nombre_comic] [varchar](30) NULL,
	[cantidad] [int] NULL,
	[valor] [int] NULL,
	[compraID] [int] NOT NULL,
	[compradorID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detalles_Compras]    Script Date: 22/05/2020 11:56:40 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalles_Compras](
	[Nombre_Comic] [varchar](1) NULL,
	[Cantidad] [int] NULL,
	[Valor] [int] NULL,
	[compraID] [int] NULL,
	[compradorID] [int] NULL,
	[id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (1, N'BRyINSERTan', 123435, N'dasde434', 334645654)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (2, N'bty', 2342, N'v43234', 1221)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (3, N'Mas', 10249322, N'cfd', 2345675)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (4, N'bryan', 23342, N'cw234234', 234234)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (5, N'saku kasu', 2312, N'cre2343454', 432423)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (7, N'kutu', 233435, N'c3r232423', 54353)
INSERT [dbo].[Compradores] ([id], [nombre], [documento], [direccion], [telefono]) VALUES (8, N'gi', 34534, N'454353', 4534535)
INSERT [dbo].[Compras] ([id], [no_Orden], [total], [fecha]) VALUES (0, 0, 23456, CAST(N'2020-02-23' AS Date))
INSERT [dbo].[Detalles_Compras] ([Nombre_Comic], [Cantidad], [Valor], [compraID], [compradorID], [id]) VALUES (N'a', 2, 35465, 0, 1, 0)
ALTER TABLE [dbo].[Detalles_Compras]  WITH CHECK ADD FOREIGN KEY([compraID])
REFERENCES [dbo].[Compras] ([id])
GO
ALTER TABLE [dbo].[Detalles_Compras]  WITH CHECK ADD FOREIGN KEY([compradorID])
REFERENCES [dbo].[Compradores] ([id])
GO
USE [master]
GO
ALTER DATABASE [Marvel_DB] SET  READ_WRITE 
GO
