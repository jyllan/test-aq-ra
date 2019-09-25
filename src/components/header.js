import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header class="header">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/settings/">Settings</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header>
    );
}

export default Header;
