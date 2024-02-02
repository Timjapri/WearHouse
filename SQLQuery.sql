CREATE TABLE Users(
	UserID uniqueidentifier PRIMARY KEY NOT NULL,
	Name varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	Password varchar(255) NOT NULL
);

CREATE TABLE Category(
	ID uniqueidentifier PRIMARY KEY NOT NULL,
	Cat varchar(255) NOT NULL
);

INSERT INTO Users VALUES
('1CC2F4B5-B714-4710-9EF2-F393623F3D1B','User1','user1@gmail.com','user1'),
('2689F5A7-9A11-46C4-AD6C-0D4A47F98D62','User2','user2@gmail.com','user2'),
('6B08B4F6-71C5-4BB8-824E-2978C4D922E2','User3','user3@gmail.com','user3'),
('6E8C93EF-E49C-4A15-95BF-AA803AA0B553','User4','user4@gmail.com','user4'),
('4559D262-356B-4798-8387-2C6F8D1BDF7D','User5','user5@gmail.com','user5');

INSERT INTO Category VALUES
('9a807725-f988-4af4-8e40-84c57fd2eedf','Clothes'),
('91236bf8-4c2c-47c7-96ca-2c46332971b1','Shoes'),
('fc5784e7-a967-4dab-adc9-17ec49751e41','Jeans'),
('f42d0f46-7b83-4441-a5ae-613285ca0f8a','Glasses'),
('e3b1dbbd-797a-4f45-9782-51cb2f8e4a12','Hats');

SELECT * FROM Users
SELECT * FROM Category