export const SET_MOOD_INDEX = 'SET_MOOD_INDEX'
export const SET_YEAR_INDEX = 'SET_YEAR_INDEX'
export const TOGGLE_OPEN_CLOSE = 'TOGGLE_OPEN_CLOSE'
export const TOGGLE_CLOSE = 'TOGGLE_CLOSE'

export const setMoodIndex = (id) => ({
  type: SET_MOOD_INDEX,
  id: id,
})

export const setYearIndex = (id) => ({
  type: SET_YEAR_INDEX,
  id: id
})

export const toggleOpenClose = () => ({
  type: TOGGLE_OPEN_CLOSE
})

export const toggleClose = () => ({
  type: TOGGLE_CLOSE
})
