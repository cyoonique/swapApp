import React, { Component } from 'react';

const Feed = (props) => {
    
    let feedHolder = [];

    for (let i = 0; i < 9; i++) {
        feedHolder.push(
            <div className="feedItem"> { i } </div>
        )
    }


    return (
        <div className="feedContainer">
            {feedHolder}
        </div>
    )
};

export default Feed;