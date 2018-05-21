// Import session actions 
import { RECEIVE_CURRENT_USER, RECEIVE_ERROR } from '../actions/session_actions'

const initialState = {
    currentUser: null,
    error: null
}

const sessionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { currentUser: action.user, error: null }
            return newState
        case RECEIVE_ERROR:
            newState = { ...state, error: action.error }
            return newState 
        default:
            return state
    }
}

export default sessionReducer