const db = require('../db/queries/entries')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, db.getEntries)
router.get('/:entryId', loginRequired, db.getSingleEntry)
router.post('/new', loginRequired, db.createEntry)
router.delete('/:entryId', loginRequired, db.deleteEntry)

module.exports = router;
