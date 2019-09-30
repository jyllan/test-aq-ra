const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      // Prevent a city to be added twice
      if(!state.find(city => city.openweatherCityId === action.openweatherCityId)) {
        return [
          ...state,
          {
            id: state[state.length - 1].id + 1, // Use the next ID available. IDs are unique and ascending
            openweatherCityId: action.openweatherCityId,
            active: false
          }
        ]
      }
      return state
    case 'REMOVE_CITY':
        return state.filter(city =>
          (city.id !== action.id)
        );
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
