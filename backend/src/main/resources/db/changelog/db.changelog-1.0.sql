--liquibase formatted sql

--changeset pulsar:1
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64),
    password VARCHAR(32),
    role VARCHAR(20)
);

--changeset pulsar:2
CREATE TABLE IF NOT EXISTS classroom (
    id SERIAL PRIMARY KEY,
    number VARCHAR(10) NOT NULL UNIQUE
);

--changeset pulsar:3
CREATE TABLE IF NOT EXISTS computer (
    id SERIAL PRIMARY KEY,
    status VARCHAR(32),
    classroom_id INTEGER REFERENCES classroom(id)
);

--changeset pulsar:4
CREATE TABLE IF NOT EXISTS ticket (
    id SERIAL PRIMARY KEY,
    message VARCHAR(256) NOT NULL,
    note VARCHAR(128),
    created_date TIMESTAMP NOT NULL,
    computer_id INTEGER REFERENCES computer(id)
);