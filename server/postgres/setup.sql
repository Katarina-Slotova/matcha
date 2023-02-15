CREATE TABLE IF NOT EXISTS users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(1000) NOT NULL,
  firstname VARCHAR(1000) NOT NULL,
  lastname VARCHAR(1000) NOT NULL,
	email VARCHAR(1000), 
	password VARCHAR(1000) NOT NULL,
  age INT NOT NULL,
  gender_identity VARCHAR(1000) DEFAULT 'other',
	gender_interest VARCHAR(1000) DEFAULT 'Everyone',
  tags VARCHAR[],
	bio VARCHAR(1000),
	city VARCHAR(1000),
	country VARCHAR(1000),
	completed BOOLEAN DEFAULT 'no',
	active SMALLINT DEFAULT 0,
	token varchar(255) NOT NULL DEFAULT 0,
	fame INT NOT NULL DEFAULT 0,
	online SMALLINT DEFAULT 0,
	last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	ip VARCHAR(255),
	latitude NUMERIC,
	longitude NUMERIC,
	profile_picture VARCHAR(1000),
	distance NUMERIC DEFAULT 10000000
);

CREATE TABLE IF NOT EXISTS tags (
	id SERIAL NOT NULL PRIMARY KEY,
  tagname VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS photos ( 
	id SERIAL NOT NULL PRIMARY KEY,
	user_id INT NOT NULL,
	photo VARCHAR(1000)
);