// Import session actions 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const initialState = {
    currentUser: null
}

const sessionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { ...state, currentUser: action.user }
            return newState
        default:
            return state
    }
}

export default sessionReducer