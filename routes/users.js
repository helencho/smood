const db = require('../db/queries/users')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')
const passport = require('../auth/local')

router.get('/logout', loginRequired, db.logoutUser)

router.post('/new', db.createUser)

router.post('/login', passport.authenticate('local'), (req, res) => {
  delete req.user.password_digest
  res.json(req.user)
})

module.exports = router;
