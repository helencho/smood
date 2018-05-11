// Import activity actions
import { RECEIVE_ACTIVITIES, RECEIVE_ERROR } from '../actions/activity_actions'

const initialState = {
    activities: [],
    error: null
}

const activityReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            newState = { ...state, activities: action.activities }
            return newState
        case RECEIVE_ERROR:
            newState = { ...state, error: action.error }
            return newState
        default:
            return state
    }
}

export default activityReducer 