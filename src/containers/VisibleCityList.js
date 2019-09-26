import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import CityList from '../components/CityList'
import { VisibilityFilters } from '../actions'
import PropTypes from 'prop-types'

const getVisibleCities = (cities, filter) => {

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cities
    case VisibilityFilters.SHOW_COMPLETED:
      return cities.filter(t => t.active)
    case VisibilityFilters.SHOW_ACTIVE:
      return cities.filter(t => !t.active)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, props) => {
    const {visibilityFilter = state.visibilityFilter} = props ;
    return {
      cities: getVisibleCities(state.cities, visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

getVisibleCities.propTypes = {
  filter: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList)
