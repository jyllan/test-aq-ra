import React from 'react'
import PropTypes from 'prop-types'

const City = ({ onClick, active, openweatherCityId }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: active ? 'line-through' : 'none'
    }}
  >
    {openweatherCityId}
  </li>
)

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  openweatherCityId: PropTypes.string.isRequired
}

export default City
