import React, { Component } from 'react';

const topNavBar = (props) => {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
            <div className="NavContainer">
                <a className="brand-logo">SwapThing</a>
                <ul className="right">
                    <li><a href="/feed">Feed</a></li>
                    <li><a href="/item">User Item</a></li>
                    <li><a href="/barter">Barter</a></li>
                    <li><a href="/upload">Upload</a></li>
                </ul>
            </div>
            </nav>
        </div>
    )
};

export default topNavBar;