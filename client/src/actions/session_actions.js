import axios from 'axios'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'
// Handle errors

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})

// Sign up 
export const signup = (user) => (dispatch) => {
    axios
        .post('/users/new', {
            name: user.name,
            username: user.username,
            password: user.password
        })
        .then((data) => {
            axios
                .post('/users/login', {
                    username: user.username,
                    password: user.password
                })
                .then((data) => {
                    let user = data.data
                    dispatch(receiveCurrentUser(user))
                })
                .catch((err) => {
                    console.log(err)
                    const error = `Error logging in after signup`
                    dispatch(receiveError(error))
                })
        })
        .catch((err) => {
            console.log(err)
            const error = `Error registering user`
            dispatch(receiveError(error))
        })
}

// Log in 
export const login = (user) => (dispatch) => {
    axios
        .post('/users/login', {
            username: user.username,
            password: user.password
        })
        .then((data) => {
            let user = data.data
            dispatch(receiveCurrentUser(user))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error logging in`
            dispatch(receiveError(error))
        })
}

// Get logged in user 
export const getUser = () => (dispatch) => {
    axios
        .get('/users/getUser')
        .then((data) => {
            let user = data.data.data
            delete user.password_digest
            dispatch(receiveCurrentUser(user))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error persisting session`
            dispatch(receiveError(error))
        })
}

// Log out
export const logout = () => (dispatch) => {
    axios
        .get('/users/logout')
        .then((data) => {
            let user = null
            dispatch(receiveCurrentUser(user))
        })
        .catch((err) => {
            console.log(err)
            const error = `Error while logging out`
            dispatch(receiveError(error))
        })
}