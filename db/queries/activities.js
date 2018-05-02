const db = require('../index')

// GET 
// /activities
const getAllActivities = (req, res, next) => {
    db
        .any('***', {
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
        .one('***', {
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
        .one('***', {
            user_id: req.user.id
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
        .none('***', {
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
        .none('***', {
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