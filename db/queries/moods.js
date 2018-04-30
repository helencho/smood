const db = require('../index')

// GET 
// /moods
const getAllMoods = (req, res, next) => {
    db
        .any('***', {
            user_id: req.user.id
        })
        .then(data => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Fetched all moods'
            });
        })
        .catch(err => {
            res.status(500).send(`Error fetching all moods: ${err}`);
        });
}

// GET 
// /moods/:moodId
const getSingleMood = (req, res, next) => { }

// POST 
// /moods/new
const createMood = (req, res, next) => { }

// PATCH 
// /moods/:moodId
const updateMood = (req, res, next) => { }

// DELETE 
// /moods/:moodId
const deleteMood = (req, res, next) => { }


module.exports = {
    getAllMoods,
    getSingleMood,
    createMood,
    updateMood,
    deleteMood
}