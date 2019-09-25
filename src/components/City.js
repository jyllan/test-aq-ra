import React from 'react'
import PropTypes from 'prop-types'

const City = ({ onClick, completed, openweatherCityId }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {openweatherCityId}
  </li>
)

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  openweatherCityId: PropTypes.string.isRequired
}

export default City
