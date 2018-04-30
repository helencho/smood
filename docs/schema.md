# Schema Information


## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
first_name      | string    | not null
photo_img       | string    | 

## moods

column name     | data type | details
----------------|-----------|-----------------------
mood_id         | integer   | not null, primary key
user_id         | integer   | not null
mood_name       | string    | not null
mood_img        | string    | not null 

## activities

column name     | data type | details
----------------|-----------|-----------------------
activity_id     | integer   | not null, primary key
user_id         | integer   | not null
activity_name   | string    | not null
activity_img    | string    | not null 

## entries 

column name     | data type | details
----------------|-----------|-----------------------
entry_id        | integer   | not null
user_id         | integer   | not null
mood_id         | integer   | not null
activity_id     | integer   | not null
entry_date      | date      | not null 
note            | string    |
