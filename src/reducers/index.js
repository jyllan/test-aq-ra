import { combineReducers } from 'redux'
import cities from './cities'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  cities,
  visibilityFilter
})
