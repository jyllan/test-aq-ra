const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
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
