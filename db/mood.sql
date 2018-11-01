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
    img TEXT,
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
    ('demo@email.com', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Demo')
;

INSERT INTO moods (user_id, mood_name, img)
VALUES
    (0, 'Happy', '😀'),
    (0, 'Angry', '😡'),
    (0, 'Sad', '😔'),
    (0, 'Cool', '😎'),
    (0, 'Annoyed', '😑')
;

INSERT INTO activities (user_id, activity_name, img)
VALUES
    (0, 'Biking', '🚴'), -- 1
    (0, 'Dancing', '💃'), -- 2
    (0, 'Running', '🏃'), -- 3
    (0, 'Shopping', '🛍'), -- 4
    (0, 'Playing video games', '🎮'), -- 5
    (0, 'Watching TV', '📺'), -- 6
    (0, 'Doing art', '🎨'), -- 7
    (0, 'Reading', '📚'), -- 8
    (0, 'Writing', '📝'), -- 9
    (0, 'Watching a movie', '🎟'), -- 10
    (0, 'Visiting a musem', '🖼'), -- 11
    (0, 'Scarying people', '👻'), -- 12
    (0, 'Beaching', '🏖'), -- 13
    (0, 'Travelling', '✈️'), -- 14
    (0, 'Celebrating', '🎉'), -- 15
    (0, 'Having a fancy drink', '🥂'), -- 16
    (0, 'Hungover', '🤮'), -- 17
    (0, 'Enjoying the weather', '🌞'), -- 18
    (0, 'Family time', '👨‍👩‍👧'), -- 19
    (0, 'Taking care of baby', '🍼'), -- 20
    (0, 'Working', '💼'), -- 21
    (0, 'Going to school', '🎒'), -- 22
    (0, 'Drinking coffee', '☕️'), -- 23
    (0, 'Eating ice cream', '🍦'), -- 24
    (0, 'Going to church', '⛪'), -- 25
    (0, 'Staying in bed', '🛌') -- 26
;

INSERT INTO entries (user_id, mood_id, activity_id, entry_date, note)
VALUES 
    (1, 1, 19, '2017-01-01', 'Spending the New Year with family!'),
    (1, 1, 18, '2017-04-07', 'Weather''s getting warmer outside'),
    (1, 1, 13, '2017-06-28', 'Beach day'),
    (1, 1, 13, '2017-07-03', 'Beach day'),
    (1, 5, 13, '2017-07-04', 'Drunk people at the beach...'),
    (1, 1, 15, '2017-08-03', 'Eating cake'),
    (1, 1, 24, '2017-08-22', 'Eating earl grey ice cream'),
    (1, 1, 13, '2017-08-23', 'Beach day!'),
    (1, 1, 7, '2017-10-09', 'Planning costumes for Halloween!'),
    (1, 1, 26, '2017-11-02', 'Rolling around in bed all day'),
    (1, 3, 26, '2017-11-02', 'Extremely hungover and wish I was feeling better'),
    (1, 3, 10, '2017-11-13', '...'),
    (1, 1, 1, '2017-11-15', '...'),
    (1, 3, 9, '2017-12-01', '...'),
    (1, 2, 22, '2017-12-02', '...'),
    (1, 3, 10, '2017-12-03', 'Watching a sad movie'),
    (1, 3, 25, '2017-12-24', 'It didn''t snow this Christmas Eve'),
    (1, 3, 25, '2017-12-25', '...'),
    (1, 3, 17, '2017-12-31', '...'),
    (1, 1, 15, '2018-01-01', '...'),
    (1, 1, 22, '2018-01-02', '...'),
    (1, 3, 9, '2018-01-03', '...'),
    (1, 5, 19, '2018-01-04', '...'),
    (1, 2, 21, '2018-02-10', '...'),
    (1, 3, 26, '2018-02-10', '...'),
    (1, 1, 24, '2018-02-14', '...'),
    (1, 5, 17, '2018-03-14', '...'),
    (1, 1, 7, '2018-03-17', '...'),
    (1, 5, 4, '2018-03-18', '...'),
    (1, 4, 5, '2018-04-01', '...'),
    (1, 1, 18, '2018-04-07', '...'),
    (1, 4, 12, '2018-04-09', '...'),
    (1, 3, 25, '2018-04-19', '...'),
    (1, 1, 7, '2018-04-20', '...'),
    (1, 3, 8, '2018-04-22', '...'),
    (1, 5, 14, '2018-05-05', '...'),
    (1, 1, 15, '2018-05-09', '...'),
    (1, 2, 8, '2018-05-14', '...'),
    (1, 3, 9, '2018-05-26', '...'),
    (1, 1, 1, '2018-05-27', '...'),
    (1, 3, 7, '2018-06-02', '...'),
    (1, 1, 21, '2018-06-09', 'Productive ''work'' day'),
    (1, 5, 21, '2018-06-12', 'Receiving rejections from job applications'),
    (1, 5, 17, '2018-06-13', 'Cleaning the house'),
    (1, 1, 18, '2018-06-14', '...'),
    (1, 1, 15, '2018-07-04', 'Freedom from classes!'),
    (1, 4, 11, '2018-07-14', 'Visiting MoMa'),
    (1, 1, 16, '2018-08-18', 'Celebrating anniversary'),
    (1, 1, 21, '2018-09-10', 'First day of work'),
    (1, 1, 21, '2018-09-12', 'Getting company swag'),
    (1, 1, 21, '2018-09-13', 'Finally getting it!'),
    (1, 2, 21, '2018-09-14', 'Stuck on something at work'),
    (1, 1, 15, '2018-09-28', 'Celebrating grandma''s birthday'),
    (1, 5, 25, '2018-10-28', 'Volunteering myself out of my comfort zone'),
    (1, 2, 21, '2018-10-29', 'Busy at work'),
    (1, 1, 21, '2018-10-30', 'Very busy at work'),
    (1, 1, 21, '2018-10-31', 'Spending the spookiest Halloween preparing for Gala')
;
