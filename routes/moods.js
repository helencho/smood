const db = require('../db/queries/moods')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, db.getAllMoods)
router.get('/:moodId', loginRequired, db.getSingleMood)
router.post('/new', loginRequired, db.createMood)
router.patch('/:moodId', loginRequired, db.updateMood)
router.delete('/:moodId', loginRequired, db.deleteMood)

module.exports = router;
