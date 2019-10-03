import React from 'react'
import Footer from './Footer'
import VisibleCityList from '../containers/VisibleCityList'

class Settings extends React.Component {
    render() {
        return (
          <div className="settings">
            <h2>Settings</h2>
            <VisibleCityList />
            <Footer />
          </div>
        )

    }
}

export { Settings };
