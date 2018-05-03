const db = require('../db/queries/activities')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, db.getAllActivities)
router.get('/:activityId', loginRequired, db.getSingleActivity)
router.post('/new', loginRequired, db.createActivity)
router.patch('/:activityId', loginRequired, db.updateActivity)
router.delete('/:activityId', loginRequired, db.deleteActivity)

module.exports = router;
