DROP DATABASE IF EXISTS flyer_dev;
CREATE DATABASE flyer_dev;

\c flyer_dev;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    message TEXT,
    email VARCHAR
);