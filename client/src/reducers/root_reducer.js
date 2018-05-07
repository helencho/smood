import { combineReducers } from 'redux'
// Import reducers 
import sessionReducer from './session_reducer'
import userReducer from './session_reducer'
import entryReducer from './entry_reducer'
import moodReducer from './mood_reducer'
import activityReducer from './activity_reducer'

const rootReducer = combineReducers(
    {
        session: sessionReducer,
        users: userReducer,
        entries: entryReducer,
        moods: moodReducer,
        activities: activityReducer
    }
)

export default rootReducer