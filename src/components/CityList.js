import React from 'react'
import PropTypes from 'prop-types'
import City from './City'

const CityList = ({ cities, showDetails, toggleTodo }) => (
  <ul>
    {cities.map(city =>
      <City
        key={city.id}
        {...city}
        showDetails={showDetails}
        onClick={() => toggleTodo(city.id)}
      />
    )}
  </ul>
)

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    openweatherCityId: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  showDetails: PropTypes.bool
}

export default CityList
