import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <NavLink to="/" className="brand-logo">
                    Knowledge Testing System
                </NavLink>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">Registration</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
