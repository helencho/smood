const db = require('../index')

// GET
// /entries
const getEntries = (req, res, next) => {
    db
        .any('SELECT entries.entry_id, entries.user_id, entries.mood_id, entries.activity_id, entries.entry_date, entries.note, moods.mood_name, moods.mood_img, activities.activity_name, activities.activity_img FROM entries JOIN moods ON moods.mood_id = entries.mood_id JOIN activities ON activities.activity_id = entries.activity_id WHERE entries.user_id=${user_id};', {
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

// GET
// /entries/:entryId
const getSingleEntry = (req, res, next) => {
    db
        .one('SELECT entries.entry_id, entries.user_id, entries.mood_id, entries.activity_id, entries.entry_date, entries.note, moods.mood_name, moods.mood_img, activities.activity_name, activities.activity_img FROM entries JOIN moods ON moods.mood_id = entries.mood_id JOIN activities ON activities.activity_id = entries.activity_id WHERE entries.entry_id=${entry_id};', {
            entry_id: req.params.entryId
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched single entry'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching single entry: ${err}`)
        })
}

// POST
// /entries/new
const createEntry = (req, res, next) => {
    db
        .one('INSERT INTO entries (entry_date, note, mood_id, activity_id, user_id) VALUES (${date}, ${note}, ${mood_id}, ${activity_id}, ${user_id}) RETURNING entry_id;', {
            date: req.body.date,
            note: req.body.note,
            mood_id: req.body.mood_id,
            activity_id: req.body.activity_id,
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
        .none('DELETE FROM entries WHERE user_id=${user_id} AND entry_id=${entry_id};', {
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
    getSingleEntry,
    createEntry,
    deleteEntry
}