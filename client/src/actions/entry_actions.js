import axios from 'axios'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

const receiveEntries = (entries) => ({
    type: RECEIVE_ENTRIES,
    entries
})

const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})

// Get all entries
export const getEntries = () => (dispatch) => {
    axios
        .get(`/entries`)
        .then((data) => {
            console.log(data)
            // dispatch(receiveEntries(entries))
        })
        .catch((err) => {
            console.log(err)
            // dispatch(receiveError(error))
        })
}

// Get single entry 
export const getEntry = (id) => (dispatch) => {
    axios
        .get(`/entries/${id}`)
        .then((data) => {
            console.log(data)
            // dispatch(receiveEntries(entry))
        })
        .catch((err) => {
            console.log(err)
            // dispatch(receiveError(error))
        })
}

// Create new entry 
export const newEntry = (entry) => (dispatch) => {
    axios
        .post('/entries/new', {
            date: entry.date,
            note: entry.note,
            mood_id: entry.mood_id,
            activity_id: entry.activity_id
        })
        .then((data) => {
            console.log(data)
            // dispatch(receiveEntries(entry))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error creating new entry`
            dispatch(receiveError(error))
        })
}

// Delete entry 
export const deleteEntry = (id) => (dispatch) => {
    axios
        .delete(`/entries/${id}`)
        .then((data) => {
            console.log(data)
            // dispatch(receiveEntries(entry))
        })
        .catch((err) => {
            console.log(err)
            // dispatch(receiveError(error))
        })
}
