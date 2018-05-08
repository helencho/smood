// Import note actions here
import { RECEIVE_ENTRY, RECEIVE_ERROR } from '../actions/entry_actions'

const initialState = {
    entries: [],
    error: null
}

const entryReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_ENTRY:
            newState = { ...state, entries: action.entry }
            return newState
        case RECEIVE_ERROR:
            newState = { ...state, error: action.error }
            return newState
        default:
            return state
    }
}

export default entryReducer