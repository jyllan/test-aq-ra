import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink
                    className="header__nav-link"
                    activeClassName="header__nav-link--active"
                    to="/home/"
                >
                    Home
                </NavLink>
                <NavLink
                    className="header__nav-link"
                    activeClassName="header__nav-link--active"
                    to="/settings/"
                >
                    Settings
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
