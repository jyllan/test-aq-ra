export const addCity = openweatherCityId => ({
  type: 'ADD_CITY',
  openweatherCityId
}
)
export const removeCity = id => ({
  type: 'REMOVE_CITY',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleActive = id => ({
  type: 'TOGGLE_CITY',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DISABLED: 'SHOW_DISABLED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
