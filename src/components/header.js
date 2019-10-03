import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="header__nav-link">
                    <Link to="/settings/">Settings</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
