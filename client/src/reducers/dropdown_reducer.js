import {
  SET_MOOD_INDEX,
  SET_YEAR_INDEX,
  TOGGLE_OPEN_CLOSE,
  TOGGLE_CLOSE
} from '../actions/dropdown_actions'

const initialState = {
  activeMoodIndex: 0,
  activeYearIndex: 1,
  isOpen: false,
}

const dropdownReducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case SET_MOOD_INDEX:
      newState = {
        ...state,
        activeMoodIndex: action.id,
        isOpen: false,
      }
      return newState
    case SET_YEAR_INDEX:
      newState = {
        ...state,
        activeYearIndex: action.id,
        isOpen: false,
      }
      return newState
    case TOGGLE_OPEN_CLOSE:
      newState = {
        ...state,
        isOpen: !state.isOpen
      }
      return newState
    case TOGGLE_CLOSE:
      newState = {
        ...state,
        isOpen: false
      }
      return newState
    default:
      return state
  }
}

export default dropdownReducer 
