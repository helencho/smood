# Endpoints


## Database

### Users

- `POST /users/new` - creates new user 
- `POST /users/login` - logs in user / gets user
- `POST /users/logout` - logs out user
- `PATCH /users/edit/:userId` - edits user 

### Moods

- `GET /moods` - fetches all moods
- `GET /moods/:moodId` - fetches mood by id
- `POST /moods/new` - creates mood
- `PATCH /moods/:moodId` - edits mood 
- `DELETE /moods/:moodId` - deletes mood 

### Activities

- `GET /activites` - fetches all activities
- `GET /activites/:activityId` - fetches activity by id
- `POST /activites/new` - creates activity
- `PATCH /activites/:activityId` - edits activity 
- `DELETE /activites/:activityId` - deletes activity 

### Entries

- `GET /entries` - fetches all entries for a user
- `GET /entries/:entryId` - fetches entry
- `POST /entries/new` - creates entry
- `DELETE /entries/:entryId` - deletes entry

### Questions
- Will created tags persist forever? Delete tag from db if tags.count is 0?