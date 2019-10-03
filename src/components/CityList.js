import React from 'react'
import PropTypes from 'prop-types'
import City from './City'
import { ListGroup } from 'react-bootstrap';

const CityList = ({ cities, showDetails, toggleActive, removeCity }) => (
    ((cities.length === 0) &&
    (
        <div className="cities__no-city">No city added/visible. Add a new city by adding it's OpenWeatherMap ID or with geolocation</div>
    )) ||
    <ListGroup as="ul">
    {
        cities.map(city =>
            <City
                key={city.id}
                {...city}
                showDetails={showDetails}
                onDisable={() => toggleActive(city.id)}
                onRemove={() => removeCity(city.id)}
            />
        )
    }
    </ListGroup>
)

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    openweatherCityId: PropTypes.number.isRequired
  }).isRequired).isRequired,
  toggleActive: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  showDetails: PropTypes.bool
}

export default CityList
