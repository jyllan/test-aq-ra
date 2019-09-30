import { connect } from 'react-redux'
import { toggleActive, removeCity } from '../actions'
import CityList from '../components/CityList'
import { VisibilityFilters } from '../actions'
import PropTypes from 'prop-types'

const getVisibleCities = (cities, filter) => {
    // Return only the cities with and active attribute matching the filter
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return cities
        case VisibilityFilters.SHOW_DISABLED:
            return cities.filter(t => t.active)
        case VisibilityFilters.SHOW_ACTIVE:
            return cities.filter(t => !t.active)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state, props) => {
    // if cities are in props, use them. Otherwise, use those stored in the state
    const {
        visibilityFilter = state.visibilityFilter,
        showDetails = state.showDetails,
    } = props;
    return {
        cities: getVisibleCities(state.cities, visibilityFilter),
        showDetails
    }
}

const mapDispatchToProps = dispatch => ({
    toggleActive: id => dispatch(toggleActive(id)),
    removeCity: id => dispatch(removeCity(id)),
})

getVisibleCities.propTypes = {
    filter: PropTypes.string,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityList)
