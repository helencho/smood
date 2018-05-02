const dbActivities = require('../db/queries/activities')
const dbEntries = require('../db/entries')
const dbMoods = require('../db/moods')
const dbUsers = require('../db/users')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')
const passport = require('../auth/local')

router.get('/getAllMoods', loginRequired, dbMoods.getAllMoods);





/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
