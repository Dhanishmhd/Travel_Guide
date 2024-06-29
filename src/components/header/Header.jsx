import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("/home"); // Set the default active link to "/home"

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleNavLinkClick = (nav) => {
        setActiveNav(nav);
        setToggle(false); // Close the menu after selecting a link
    };

    return (
        <header className={`header ${toggle ? 'scroll-header' : ''}`}>
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">Travel Guide</NavLink>
                <div className={`nav__menu ${toggle ? 'show-menu' : ''}`}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <NavLink exact to="/home" activeClassName={activeNav === "/home" ? "active-link" : ""} className="nav__link" onClick={() => handleNavLinkClick("/home")}>Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink exact to="/locations" activeClassName={activeNav === "/locations" ? "active-link" : ""} className="nav__link" onClick={() => handleNavLinkClick("/locations")}>Destinations</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink exact to="/planner" activeClassName={activeNav === "/planner" ? "active-link" : ""} className="nav__link" onClick={() => handleNavLinkClick("/planner")}>Planner</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink exact to="/guidelines" activeClassName={activeNav === "/guidelines" ? "active-link" : ""} className="nav__link" onClick={() => handleNavLinkClick("/guidelines")}>Guidelines</NavLink>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={handleToggle}></i>
                </div>
                <div className="nav__toggle" onClick={handleToggle}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
