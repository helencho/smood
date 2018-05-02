const passport = require('passport')
const db = require('../db/index')

module.exports = () => {
    passport.serializeUser((user, done) => {
        // console.log('serialize')
        done(null, user.username)
    })

    passport.deserializeUser((username, done) => {
        // console.log('deserialize')
        db
            .one('SELECT * FROM users WHERE username=${username}', {
                username: username
            })
            .then(user => {
                console.log(user)
                done(null, user)
            })
            .catch(err => {
                done(err, null)
            })
    })
}
