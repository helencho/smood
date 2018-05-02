const dbActivities = require('../db/queries/activities')
const dbEntries = require('../db/queries/entries')
const dbMoods = require('../db/queries/moods')
const dbUsers = require('../db/queries/users')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')
const passport = require('../auth/local')

// GET
router.get('/moods', loginRequired, dbMoods.getAllMoods)
router.get('/moods/:moodId')
router.get('/activities')
router.get('/activities/:activityId')
router.get('/entries')

// POST
router.post('/users/new')
router.post('/users/login')
router.post('/users/logout')
router.post('/moods/new')
router.post('/activities/new')
router.post('/entries/new')

// PATCH
router.patch('/users/edit')
router.patch('/moods/:moodId')
router.patch('/activities/:activityId')

// DELETE
router.delete('/users/delete')
router.delete('/moods/:moodId')
router.delete('/activities/:activityId')
router.delete('/entries/:entryId')



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
