const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const init = require('./passport')
const authHelpers = require('./helpers')

const db = require('../db/index')

const options = {}

init()
passport.use(
    new localStrategy(options, (username, password, done) => {
        db
            .any('SELECT * FROM users WHERE username=$1', [username])
            .then(rows => {
                const user = rows[0]

                if (!user) {
                    return done(null, false)
                }
                if (!authHelpers.comparePassword(password, user.password_digest)) {
                    return done(null, false)
                } else {
                    return done(null, user)
                }
            })
            .catch(err => {
                console.log(`login error: ${err}`)
                return done(err)
            })
    })
)

module.exports = passport
