const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      // Prevent a city to be added twice
      if(!state.find(city => city.openweatherCityId === action.openweatherCityId)) {
        return [
          ...state,
          {
            id: Object.keys(state).length, // Use the next ID available. IDs are unique and consecutive
            openweatherCityId: action.openweatherCityId,
            active: false
          }
        ]
      }
      return state
    case 'TOGGLE_CITY':
      // Toggle the selected city's active attribute
      return state.map(city =>
        (city.id === action.id)
          ? {...city, active: !city.active}
          : city
      )
    default:
      return state
  }
}

export default cities
