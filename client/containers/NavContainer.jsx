import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="NavContainer">
                <a className="brand-logo">SwapThing</a>
                <ul className="right">
                    <li><Link to="/feed">Feed</Link></li>
                    <li><Link to="/item">User Item</Link></li>
                    <li><Link to="/barter">Barter</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;