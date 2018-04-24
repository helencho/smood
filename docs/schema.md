# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
first_name      | string    | not null
last_name       | string    | 

## moods
column name     | data type | details
----------------|-----------|-----------------------
mood_id         | integer   | not null, primary key
mood_name       | string    | not null
mood_desc       | string    | not null 
mood_img        | string    | not null 
default         | boolean   | not null

## activities
column name     | data type | details
----------------|-----------|-----------------------
activity_id     | integer   | not null, primary key
activity_name   | string    | not null
activity_desc   | string    | not null 
activity_img    | string    | not null 
default         | boolean   | not null

## entries 
column name     | data type | details
----------------|-----------|-----------------------
entry_id        | integer   | not null
time            | date      | not null
note            | string    |
user_id         | integer   | not null, foreign key (references users), indexed
mood_id         | integer   | not null, foreign key (references moods), indexed
activity_id     | integer   | not null, foreign key (references activities), indexed
