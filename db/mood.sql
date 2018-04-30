DROP DATA IF EXISTS mood;
CREATE DATABASE mood;
\c mood;

-- Create tables --
CREATE TABLE users (
    id SERIAL UNIQUE, 
    username VARCHAR UNIQUE,
    password_digest VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR,
    photo_url VARCHAR,
    PRIMARY KEY (id)
);

CREATE TABLE moods (
    id SERIAL UNIQUE,
    mood_name VARCHAR NOT NULL,
    mood_desc VARCHAR NOT NULL,
    mood_img VARCHAR NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE activities (
    id SERIAL UNIQUE,
    activity_name VARCHAR NOT NULL,
    activity_desc VARCHAR NOT NULL,
    activity_img VARCHAR NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE entries (
    id SERIAL UNIQUE,
    note_time DATE NOT NULL,
    note VARCHAR,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (mood_id) REFERENCES moods(id),
    FOREIGN KEY (activity_id) REFERENCES activities(id)
);

-- Seed data --
INSERT INTO users (username, password_digest, first_name, last_name, photo_url)
VALUES 
    ('helen@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Helen', 'C'),
    ('sarah@gmail.com' '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Sarah', 'C')
;
