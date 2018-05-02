const db = require('../index')

// GET 
// /moods
const getAllMoods = (req, res, next) => {
    db
        .any('SELECT * FROM moods WHERE user_id=0 OR user_id=${user_id};', {
            user_id: req.user.id
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched all moods'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching all moods: ${err}`)
        })
}

// GET 
// /moods/:moodId
const getSingleMood = (req, res, next) => {
    db
        .one('SELECT * FROM moods WHERE mood_id=${mood_id};', {
            mood_id: req.params.moodId
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched single mood'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching single mood: ${err}`)
        })
}

// POST 
// /moods/new
const createMood = (req, res, next) => {
    db
        .one('INSERT INTO moods (user_id, mood_name, mood_img) VALUES (${user_id}, ${name}, ${url}) RETURNING mood_id;', {
            user_id: req.user.id,
            name: req.body.name,
            url: req.body.url
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Created single mood'
            })
        })
        .catch(err => {
            res.status(500).send(`Error creating single mood: ${err}`)
        })
}

// PATCH 
// /moods/:moodId
const updateMood = (req, res, next) => {
    db
        .none('UPDATE moods SET mood_name=${name} WHERE user_id=${user_id} AND mood_id=${mood_id};', {
            name: req.body.name,
            user_id: req.user.id,
            mood_id: req.params.moodId,
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Updated single mood'
            })
        })
        .catch(err => {
            res.status(500).send(`Error updating single mood: ${err}`)
        })
}

// DELETE 
// /moods/:moodId
const deleteMood = (req, res, next) => {
    db
        .none('DELETE FROM moods WHERE user_id=${user_id} AND mood_id=${mood_id};', {
            user_id: req.user.id,
            mood_id: req.params.moodId
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Deleted single mood'
            })
        })
        .catch(err => {
            res.status(500).send(`Error deleting single mood: ${err}`)
        })
}


module.exports = {
    getAllMoods,
    getSingleMood,
    createMood,
    updateMood,
    deleteMood
}