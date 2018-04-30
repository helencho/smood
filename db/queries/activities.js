const db = require('../index')

// GET 
// /activities
const getAllActivities = (req, res, next) => { }

// GET 
// /activities/activityId
const getSingleActivity = (req, res, next) => { }

// POST 
// /activities/new
const createActivity = (req, res, next) => { }

// PATCH 
// /activities/:activityId
const updateActivity = (req, res, next) => { }

// DELETE 
// /activities/:activityId
const deleteActivity = (req, res, next) => { }

module.exports = {
    getAllActivities,
    getSingleActivity,
    createActivity,
    updateActivity,
    deleteActivity
}