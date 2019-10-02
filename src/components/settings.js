import React from 'react'
import Footer from './Footer'
import AddCity from '../containers/AddCity'
import GeolocCity from '../containers/GeolocCity'
import VisibleCityList from '../containers/VisibleCityList'

class Settings extends React.Component {
    render() {
        return (
          <div>
            <h2>Settings</h2>
            <AddCity />
            <GeolocCity />
            <VisibleCityList />
            <Footer />
          </div>
        )

    }
}

export { Settings };
