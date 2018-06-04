const db = require('../index')

// GET 
// /activities
const getAllActivities = (req, res, next) => {
    db
        .any('SELECT * FROM activities WHERE user_id=0 OR user_id=${user_id};', {
            user_id: req.user.id
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched all activities'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching all activites: ${err}`)
        })
}

// GET 
// /activities/activityId
const getSingleActivity = (req, res, next) => {
    db
        .one('SELECT * FROM activities WHERE activity_id=${activity_id};', {
            activity_id: req.params.activityId
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Fetched single activity'
            })
        })
        .catch(err => {
            res.status(500).send(`Error fetching single activity: ${err}`)
        })
}

// POST 
// /activities/new
const createActivity = (req, res, next) => {
    db
        .one('INSERT INTO activities (user_id, activity_name, img) VALUES (${user_id}, ${name}, ${url}) RETURNING activity_id;', {
            user_id: req.user.id,
            name: req.body.name,
            url: req.body.url
        })
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Created single activity'
            })
        })
        .catch(err => {
            res.status(500).send(`Error creating single activity: ${err}`)
        })
}

// PATCH 
// /activities/:activityId
const updateActivity = (req, res, next) => {
    db
        .none('UPDATE activities SET activity_name=${name} WHERE user_id=${user_id} AND activity_id=${activity_id};', {
            name: req.body.name,
            user_id: req.user.id,
            activity_id: req.params.activityId
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Updated single activity'
            })
        })
        .catch(err => {
            res.status(500).send(`Error updating single activity: ${err}`)
        })
}

// DELETE 
// /activities/:activityId
const deleteActivity = (req, res, next) => {
    db
        .none('DELETE FROM activities WHERE user_id=${user_id} AND activity_id=${activity_id};', {
            user_id: req.user.id,
            activity_id: req.params.activityId
        })
        .then(() => {
            res.status(200).json({
                status: 'Success',
                message: 'Deleted single activity'
            })
        })
        .catch(err => {
            res.status(500).send(`Error deleting single activity: ${err}`)
        })
}


module.exports = {
    getAllActivities,
    getSingleActivity,
    createActivity,
    updateActivity,
    deleteActivity
}