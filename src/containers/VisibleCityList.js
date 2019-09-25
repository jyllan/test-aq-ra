import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import CityList from '../components/CityList'
import { VisibilityFilters } from '../actions'

const getVisibleCities = (cities, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cities
    case VisibilityFilters.SHOW_COMPLETED:
      return cities.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return cities.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  cities: getVisibleCities(state.cities, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList)
