# Endpoints


## Database

### Users

- `POST /users/new` - creates new user 
- `POST /users/login` - logs in user / gets user
- `POST /users/logout` - logs out user
- `PATCH /users/edit` - edits user 
- `DELETE /users/delete` - deletes user

### Moods

- `GET /moods` - fetches all moods
- `GET /moods/:moodId` - fetches mood by id
- `POST /moods/new` - creates mood
- `PATCH /moods/:moodId` - edits mood 
- `DELETE /moods/:moodId` - deletes mood 

### Activities

- `GET /activities` - fetches all activities
- `GET /activities/:activityId` - fetches activity by id
- `POST /activities/new` - creates activity
- `PATCH /activities/:activityId` - edits activity 
- `DELETE /activities/:activityId` - deletes activity 

### Entries

- `GET /entries` - fetches all entries for a user
<!-- - `GET /entries/:entryId` - fetches entry -->
- `POST /entries/new` - creates entry
- `DELETE /entries/:entryId` - deletes entry

### Questions
- How will each user customize moods and activities? Separate customizable tables? Add `user_id` column?