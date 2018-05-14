// Import note actions here
import { RECEIVE_ENTRIES, RECEIVE_ERROR } from '../actions/entry_actions'

const initialState = {
    entries: [],
    error: null
}

const entryReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_ENTRIES:
            newState = { ...state, entries: action.entries }
            return newState
        case RECEIVE_ERROR:
            newState = { ...state, error: action.error }
            return newState
        default:
            return state
    }
}

export default entryReducer