import React from 'react'
import PropTypes from 'prop-types'
import City from './City'

const CityList = ({ cities, showDetails, toggleActive, removeCity }) => (
  <ul>
    {cities.map(city =>
      <City
        key={city.id}
        {...city}
        showDetails={showDetails}
        onDisable={() => toggleActive(city.id)}
        onRemove={() => removeCity(city.id)}
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
  toggleActive: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  showDetails: PropTypes.bool
}

export default CityList
