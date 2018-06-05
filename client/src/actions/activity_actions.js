import axios from 'axios'
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

const receiveActivities = (activities) => ({
    type: RECEIVE_ACTIVITIES,
    activities
})

const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})

// Get all activities 
export const getActivities = () => (dispatch) => {
    axios
        .get('/activities')
        .then((data) => {
            const activities = data.data.data
            dispatch(receiveActivities(activities))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error getting all activities`
            dispatch(receiveError(error))
        })
}

// Get single activity

// Create activity
export const newActivity = (activity) => (dispatch) => {
    axios
        .post(`/activities/new`, {
            name: activity.name,
            url: activity.url
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            const error = `Error creating activity`
            dispatch(receiveError(error))
        })
}

// Edit activity
export const editActivity = (activity) => (dispatch) => {
    axios
        .patch(`/activities/${activity.id}`, {
            name: activity.name
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            const error = `Error updating activity`
            dispatch(receiveError(error))
        })
}

// Delete activity
export const deleteActivity = (id) => (dispatch) => {
    axios
        .delete(`/activities/${id}`)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            const error = `Error deleting activity`
            dispatch(receiveError(error))
        })
}