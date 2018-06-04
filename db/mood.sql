DROP DATABASE IF EXISTS mood;
CREATE DATABASE mood;
\c mood;

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
    img VARCHAR NOT NULL,
    PRIMARY KEY (mood_id)
);

DROP TABLE activities CASCADE;
CREATE TABLE activities (
    activity_id SERIAL UNIQUE,
    user_id INTEGER NOT NULL,
    activity_name VARCHAR NOT NULL,
    img TEXT,
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

INSERT INTO moods (user_id, mood_name, img)
VALUES
    (0, 'happy', '😀'),
    (0, 'calm', '😌'),
    (0, 'upset', '😡'),
    (0, 'sad', '😔'),
    (0, 'meh', '😒'),
    (1, 'silly', '🤪'),
    (2, 'hyper', '🤩'),
    (3, 'sick', '🤒 ')
;

INSERT INTO activities (user_id, activity_name, img)
VALUES
    (0, 'dance', '💃'),
    (0, 'run', '🏃'),
    (0, 'shop', '🛍'),
    (0, 'video game', '🎮'),
    (0, 'tv', '📺'),
    (0, 'paint', '🎨'),
    (0, 'read', '📚'),
    (0, 'write', '📝'),
    (0, 'movie', '🎟'),
    (0, 'bike', '🚴'),
    (0, 'beach', '🏖'),
    (0, 'travel', '✈️'),
    (0, 'celebrate', '🎉'),
    (0, 'baby', '🍼'),
    (0, 'work', '💼'),
    (0, 'school', '🎒'),
    (0, 'graduate', '🎓')
;

INSERT INTO entries (user_id, mood_id, activity_id, entry_date, note)
VALUES 
    (1, 1, 1, '2018-04-30', 'I love dancing'),
    (2, 2, 4, '2018-05-05', 'I LOVE RUNNING'),
    (3, 3, 8, '2018-05-08', 'I hate shopping')
;