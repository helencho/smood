// Import mood actions
import { RECEIVE_MOODS, RECEIVE_ERROR } from '../actions/mood_actions'

const initialState = {
    moods: [],
    error: null
}

const moodReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_MOODS:
            newState = { ...state, moods: action.moods }
            return newState
        case RECEIVE_ERROR:
            newState = { ...state, error: action.error }
            return newState
        default:
            return state
    }
}

export default moodReducer 