const db = require('../index')

// GET
// /entries
const getEntries = (req, res, next) => { }

// POST
// /entries/new
const createEntry = (req, res, next) => { }

// DELETE
// /entries/:entryId
const deleteEntry = (req, res, next) => { }

module.exports = {
    getEntries,
    createEntry,
    deleteEntry
}