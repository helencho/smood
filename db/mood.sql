DROP DATABASE IF EXISTS mood;
CREATE DATABASE mood;
\c mood;

-- Users 
DROP TABLE users CASCADE;
CREATE TABLE users (
    id SERIAL UNIQUE, 
    username VARCHAR UNIQUE,
    password_digest VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    photo_img VARCHAR,
    PRIMARY KEY (id)
);

-- Users seed data
INSERT INTO users (username, password_digest, first_name)
VALUES 
    ('helen@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Helen'),
    ('michelle@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Michelle'),
    ('david@gmail.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'David')
;


-- Moods 
DROP TABLE moods CASCADE;
CREATE TABLE moods (
    mood_id SERIAL UNIQUE,
    user_id INTEGER,
    mood_name VARCHAR NOT NULL,
    mood_img VARCHAR NOT NULL,
    PRIMARY KEY (mood_id)
);

-- Moods seed data
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


-- Custom moods 
-- DROP TABLE custom_moods CASCADE;
-- CREATE TABLE custom_moods (
--     mood_id SERIAL UNIQUE,
--     user_id INTEGER,
--     mood_name VARCHAR NOT NULL,
--     mood_img VARCHAR NOT NULL,
--     PRIMARY KEY (mood_id),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- Custom moods seed data
-- INSERT INTO custom_moods (user_id, mood_name, mood_img)
-- VALUES
--     (1, 'angry', 'angry url'),
--     (2, 'hyper', 'hyper url'),
--     (3, 'excited', 'excited url')
-- ;

-- DROP TABLE activities CASCADE;
-- CREATE TABLE activities (
--     activity_id SERIAL UNIQUE,
--     user_id INTEGER,
--     activity_name VARCHAR NOT NULL,
--     activity_img VARCHAR NOT NULL,
--     PRIMARY KEY (activity_id),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- DROP TABLE entries CASCADE;
-- CREATE TABLE entries (
--     entry_id SERIAL UNIQUE,
--     user_id INTEGER,
--     mood_id INTEGER,
--     activity_id INTEGER,
--     entry_date DATE NOT NULL,
--     note VARCHAR,
--     PRIMARY KEY (entry_id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (mood_id) REFERENCES moods(mood_id),
--     FOREIGN KEY (activity_id) REFERENCES activities(activity_id)
-- );
