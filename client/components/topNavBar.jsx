import React, { Component } from 'react';

const TopNavBar = (props) => {
    return (
        <div>
            <nav className="NavContainer">

                <a className="brand-logo">SwapThing</a>
                
                <ul className="navButton">

                    <li><a href="/feed">Feed</a></li>

                    <li><a onClick={() => {props.feedDisplayToggle()}}>User Item</a></li>

                    <li><a href="/barter">Barter</a></li>
                    
                    <li><a href="/upload">Upload</a></li>

                </ul>

            </nav>
        </div>
    )
};

export default TopNavBar;