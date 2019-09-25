import React from 'react'
import Footer from './Footer'
import AddCity from '../containers/AddCity'
import VisibleCityList from '../containers/VisibleCityList'

const App = () => (
  <div>
    <AddCity />
    <VisibleCityList />
    <Footer />
  </div>
)

export default App
