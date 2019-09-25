import React from 'react'
import PropTypes from 'prop-types'
import City from './City'

const CityList = ({ cities, toggleTodo }) => (
  <ul>
    {cities.map(city =>
      <City
        key={city.id}
        {...city}
        onClick={() => toggleTodo(city.id)}
      />
    )}
  </ul>
)

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default CityList
