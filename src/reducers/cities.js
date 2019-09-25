const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      if(!state.find(city => city.text === action.text)) {
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
      return state
    case 'TOGGLE_CITY':
      return state.map(city =>
        (city.id === action.id)
          ? {...city, completed: !city.completed}
          : city
      )
    default:
      return state
  }
}

export default cities
