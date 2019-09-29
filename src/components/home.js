import React from 'react';
import VisibleCityList from '../containers/VisibleCityList'
import { VisibilityFilters } from '../actions'

class Home extends React.Component {
    render() {
        return (
          <div>
            <h2>Home</h2>
            <VisibleCityList
                visibilityFilter={VisibilityFilters.SHOW_ACTIVE}
                showDetails={true}
            />
          </div>
        )

    }
}
export { Home };
