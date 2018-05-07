import axios from 'axios'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

// Sign up 
export const signup = (user) => (dispatch) => {
    // Signup user to backend
    // Then call dispatch method receiveCurrentUser
    // Then log errors
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
        })
}

// Log out
export const logout = () => (dispatch) => {
    // Logout user to backend
    // Then call dispatch method receiveCurrentUser
    // Then log errors
}