import React from 'react'
import { connect } from 'react-redux'
import { addCity } from '../actions'

const AddCity = ({ dispatch }) => {
  let input

  // Show a simple form with an input and a submit button
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // On submit, call the addCity action
        dispatch(addCity(input.value))
        input.value = ''
      }}>
        <input
            ref={node => input = node}
            placeholder="OpenWeather City ID"
        />
        <button type="submit">
          Add City
        </button>
      </form>
    </div>
  )
}

export default connect()(AddCity)
