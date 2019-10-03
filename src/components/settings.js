import React from 'react'
import Footer from './Footer'
import VisibleCityList from '../containers/VisibleCityList'

class Settings extends React.Component {
    render() {
        return (
          <div className="settings">
            <VisibleCityList />
            <Footer />
          </div>
        )

    }
}

export { Settings };
