import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/settings'}>Settings</NavLink>
        </ul>
    );
}

export default Navbar