import React, { Component } from 'react';

const TopNavBar = (props) => {
    return (
        <div>
            <nav className="NavContainer">

                <a className="brand-logo">S W A P ↠</a>
                
                <ul className="navButton">

                    <li><a onClick={() => {
                                    props.feedDisplayToggle()
                                    props.addListingToggle()
                                    }}>Add Listing</a></li>

                    <li><a onClick={() => {props.feedDisplayToggle()}}>Feed</a></li>

                    <li><a onClick={() => {props.userItemsDisplayToggle()}}>User Item</a></li>

                    <li><a onClick={() => {props.barterDisplayToggle()}}>Barter</a></li>

                    <li><a href="/upload">Upload</a></li>

                </ul>

            </nav>
        </div>
    )
};

export default TopNavBar;