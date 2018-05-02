const db = require('../db/queries/moods')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')
// const passport = require('../auth/local')

router.get('/', db.getAllMoods)
router.get('/:moodId', db.getSingleMood)
router.post('/new', db.createMood)
router.patch('/:moodId', db.updateMood)
router.delete('/:moodId', db.deleteMood)

module.exports = router;
