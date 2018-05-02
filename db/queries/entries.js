const db = require('../index')

// GET
// /entries
const getEntries = (req, res, next) => {
    db
        .any('***', {
            user_id: req.user.id
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched all entries'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching all entries: ${err}`)
        })
}

// POST
// /entries/new
const createEntry = (req, res, next) => {
    db
        .one('***', {
            user_id: req.user.id
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Created single entry'
            })
        })
        .catch(err => {
            res.status(500).send(`Error creating single entry: ${err}`)
        })
}

// DELETE
// /entries/:entryId
const deleteEntry = (req, res, next) => {
    db
        .none('***', {
            user_id: req.user.id,
            entry_id: req.params.entryId
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Deleted single entry'
            })
        })
        .catch(err => {
            res.status(500).send(`Error deleting single entry: ${err}`)
        })
}


module.exports = {
    getEntries,
    createEntry,
    deleteEntry
}