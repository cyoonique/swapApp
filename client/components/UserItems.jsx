import React, { Component } from 'react';

const UserItems = (props) => {
    
    let userItemsHolder = [];

    for (let i = 0; i < 5; i++) {
        userItemsHolder.push( 
            <div className="userItem"> { i } </div>
        )
    }
    return (
        <div className="userItemsContainer">
            {userItemsHolder}
        </div>
    )
};

export default UserItems;