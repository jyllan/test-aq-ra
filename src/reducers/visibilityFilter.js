import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      // Reduce the state to a single attribute : filter
      return action.filter
    default:
      // No action asked, return the full state
      return state
  }
}

export default visibilityFilter
