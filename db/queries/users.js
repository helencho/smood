const db = require('../index')
const authHelpers = require('../../auth/helpers')

// POST 
// /users/new
const createUser = (req, res, next) => {
    const hash = authHelpers.createHash(req.body.password)
    db
        .none('INSERT INTO users (username, password_digest, first_name) VALUES (${username}, ${password}, ${name});', {
            username: req.body.username,
            password: hash,
            name: req.body.name
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Created new user'
            })
        })
        .catch(err => {
            res.status(500).send(`Error creating user: ${err}`)
        })
}

// GET 
// /users/logout
const logoutUser = (req, res, next) => {
    req.logout()
    res.status(200).send(`Logout success`)
}

// PATCH 
// /users/edit/
const updateUser = (req, res, next) => { }

// DELETE 
// /users/delete
const deleteUser = (req, res, next) => { }

module.exports = {
    createUser,
    logoutUser,
    // updateUser,
    // deleteUser
}