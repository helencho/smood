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
    (0, 'happy', 'https://i.imgur.com/YamOYXt.png'),
    (0, 'calm', 'https://i.imgur.com/qzkkCbf.png'),
    (0, 'upset', 'https://i.imgur.com/U4dsaLs.png'),
    (0, 'sad', 'https://i.imgur.com/87QoEYl.png'),
    (0, 'meh', 'https://i.imgur.com/IHblVsA.png'),
    (1, 'silly', 'https://i.imgur.com/cedkuiq.png'),
    (1, 'angry', 'https://i.imgur.com/MB7SuaO.png'),
    (2, 'hyper', 'https://i.imgur.com/LXYQOAH.png'),
    (3, 'excited', 'https://i.imgur.com/i4RbQU9.png')
;

INSERT INTO activities (user_id, activity_name, activity_img)
VALUES
    (0, 'yoga', 'https://i.imgur.com/tXkjlKM.png'),
    (0, 'weightlifting', 'https://i.imgur.com/GE3IUY4.png'),
    (0, 'gaming', 'https://i.imgur.com/CzMkvWn.png'),
    (0, 'hiking', 'https://i.imgur.com/az5kmZ0.png'),
    (0, 'snowboarding', 'https://i.imgur.com/M35QeZc.png'),
    (0, 'shopping', 'https://i.imgur.com/Q9wKq8A.png'),
    (0, 'running', 'https://i.imgur.com/9fFX2ZC.png'),
    (0, 'reading', 'https://i.imgur.com/tE363OX.png'),
    (0, 'pottery', 'https://i.imgur.com/BbLLsSC.png'),
    (0, 'playing the piano', 'https://i.imgur.com/W4ZQGQD.png'),
    (0, 'photography', 'https://i.imgur.com/NrBfw0z.png'),
    (0, 'parachuting', 'https://i.imgur.com/CIqnkAq.png'),
    (0, 'origami', 'https://i.imgur.com/KrO2IQ9.png'),
    (0, 'riding', 'https://i.imgur.com/pNfSmIg.png'),
    (0, 'solving a puzzle', 'https://i.imgur.com/lllseqw.png'),
    (0, 'hunting', 'https://i.imgur.com/E6CeDWv.png'),
    (0, 'horseback riding', 'https://i.imgur.com/xYm6czJ.png'),
    (0, 'playing the guitar', 'https://i.imgur.com/I1E6Qf9.png'),
    (0, 'fishing', 'https://i.imgur.com/BZPWHbV.png'),
    (0, 'exericsing', 'https://i.imgur.com/8wpoRXF.png'),
    (0, 'painting', 'https://i.imgur.com/d69GcNx.png'),
    (0, 'fixing', 'https://i.imgur.com/qgvAAqR.png'),
    (0, 'scuba diving', 'https://i.imgur.com/Beat9QJ.png'),
    (0, 'bicycling', 'https://i.imgur.com/SOK2kl1.png'),
    (0, 'cooking breakfast', 'https://i.imgur.com/4RJEsjj.png'),
    (0, 'climbing', 'https://i.imgur.com/nyI7zzl.png'),
    (0, 'camping', 'https://i.imgur.com/nz57iVE.png'),
    (0, 'board games', 'https://i.imgur.com/mLsEjUr.png'),
    (0, 'baseball', 'https://i.imgur.com/9hyr5Bg.png'),
    (0, 'baking', 'https://i.imgur.com/Ja04rFE.png'),
    (0, 'archery', 'https://i.imgur.com/ZQ35npG.png')
;

INSERT INTO entries (user_id, mood_id, activity_id, entry_date, note)
VALUES 
    (1, 1, 1, '2018-04-30', 'Running makes me feel so good.'),
    (2, 2, 4, '2018-05-05', 'I love ube cake!'),
    (3, 3, 8, '2018-05-08', 'Got rejected from Google today.')
;