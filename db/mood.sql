-- DROP DATABASE IF EXISTS mood;
-- CREATE DATABASE mood;
-- \c mood;

DROP TABLE users CASCADE;
CREATE TABLE users (
    id SERIAL UNIQUE, 
    username VARCHAR UNIQUE,
    password_digest VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    photo_img VARCHAR,
    PRIMARY KEY (id)
);

DROP TABLE moods CASCADE;
CREATE TABLE moods (
    mood_id SERIAL UNIQUE,
    user_id INTEGER NOT NULL,
    mood_name VARCHAR NOT NULL,
    mood_img VARCHAR NOT NULL,
    PRIMARY KEY (mood_id)
);

DROP TABLE activities CASCADE;
CREATE TABLE activities (
    activity_id SERIAL UNIQUE,
    user_id INTEGER NOT NULL,
    activity_name VARCHAR NOT NULL,
    activity_img VARCHAR NOT NULL,
    PRIMARY KEY (activity_id)
);

DROP TABLE entries CASCADE;
CREATE TABLE entries (
    entry_id SERIAL UNIQUE,
    user_id INTEGER,
    mood_id INTEGER,
    activity_id INTEGER,
    entry_date DATE NOT NULL,
    note VARCHAR,
    PRIMARY KEY (entry_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (mood_id) REFERENCES moods(mood_id),
    FOREIGN KEY (activity_id) REFERENCES activities(activity_id)
);


-- Seed data
INSERT INTO users (username, password_digest, first_name)
VALUES 
    ('helen@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Helen'),
    ('michelle@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Michelle'),
    ('david@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'David')
;

INSERT INTO moods (user_id, mood_name, mood_img)
VALUES
    (0, 'happy', 'happy url'),
    (0, 'calm', 'calm url'),
    (0, 'upset', 'upset url'),
    (0, 'sad', 'sad url'),
    (0, 'meh', 'meh url'),
    (1, 'angry', 'angry url'),
    (2, 'hyper', 'hyper url'),
    (3, 'excited', 'excited url')
;

INSERT INTO activities (user_id, activity_name, activity_img)
VALUES
    (0, 'running', 'running url'),
    (0, 'book', 'book url'),
    (0, 'pizza', 'pizza url'),
    (0, 'cake', 'cake url'),
    (0, 'eggplant', 'eggplant url'),
    (0, 'hiking', 'hiking url'),
    (0, 'game console', 'game console url'),
    (0, 'rejection', 'rejection url')
;

INSERT INTO entries (user_id, mood_id, activity_id, entry_date, note)
VALUES 
    (1, 1, 1, '2018-04-30', 'Running makes me feel so happy!'),
    (2, 2, 4, '2018-04-30', 'I had too much cake...'),
    (3, 3, 8, '2018-04-30', 'Got rejected from Google')
;