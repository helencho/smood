const db = require('../db/index')
const bcrypt = require('bcryptjs')

const comparePassword = (userPassword, dbPassword) => {
    return bcrypt.compareSync(userPassword, dbPassword)
}

const createHash = (password) => {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

const loginRequired = (req, res, next) => {
    if (!res.user) {
        res.status(401).json({
            status: 'Please log in'
        })
        return
    }
    next()
}

module.exports = {
    comparePassword,
    createHash,
    loginRequired
}
