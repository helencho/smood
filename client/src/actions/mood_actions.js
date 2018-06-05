import axios from 'axios'
export const RECEIVE_MOODS = 'RECEIVE_MOODS'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

const receiveMoods = (moods) => ({
    type: RECEIVE_MOODS,
    moods
})

const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})

// Get all moods 
export const getMoods = () => (dispatch) => {
    axios
        .get(`/moods`)
        .then((data) => {
            const moods = data.data.data
            dispatch(receiveMoods(moods))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error getting all moods`
            dispatch(receiveError(error))
        })
}

// Get single mood 
export const getMood = (id) => (dispatch) => {
    axios
        .get(`/moods/${id}`)
        .then((data) => {
            console.log(data)
            // dispatch(receiveMoods(mood))
        })
        .catch((err) => {
            console.log(err)
            // dispatch(receiveError(error))
        })
}

// Create mood 
export const newMood = (mood) => (dispatch) => {
    axios
        .post(`/moods/new`, {
            name: mood.name,
            url: mood.url
        })
        .then((data) => {
            console.log(data)
            // dispatch(receiveMoods(mood))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error creating mood`
            dispatch(receiveError(error))
        })
}

// Edit mood 
export const editMood = (mood) => (dispatch) => {
    axios
        .patch(`/moods/${mood.id}`, {
            name: mood.name
        })
        .then((data) => {
            console.log(data)
            // dispatch(receiveMoods(mood))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error updating mood`
            dispatch(receiveError(error))
        })
}

// Delete mood 
export const deleteMood = (id) => (dispatch) => {
    axios
        .delete(`/moods/${id}`)
        .then((data) => {
            console.log(data)
            // dispatch(receiveMoods(mood))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error deleting mood`
            dispatch(receiveError(error))
        })
}