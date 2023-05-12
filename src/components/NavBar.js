import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <nav>
                    <NavLink exact='true' to='/'>Blog</NavLink>
                    <NavLink exact='true' to='/new'>Add a new post.</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;

