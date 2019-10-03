import React from 'react'
import FilterLink from '../containers/FilterLink'
import { ButtonGroup } from 'react-bootstrap';
import AddCity from '../containers/AddCity'
import GeolocCity from '../containers/GeolocCity'

import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div className="footer">
        <div className="footer__addcity">
        <AddCity />
        <GeolocCity />
        </div>
        <div className="filters">
            <span>Filter: </span>
            <ButtonGroup aria-label="Basic example">
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                        All cities
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Visible cities
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_DISABLED}>
                    Hidden cities
                </FilterLink>
            </ButtonGroup>
        </div>
    </div>
)

export default Footer
