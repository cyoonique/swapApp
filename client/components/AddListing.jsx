import React, { Component } from 'react';

const AddListing = (props) => {
    return (
        <div className="addListingContainer">
            <form className="addListingForm" action="/signup" method="POST">
        <h1>Create Listing</h1>

        <label>Item:</label>
        <input class="itemName" type="text" name="itemName" placeholder="Enter item name..." required/>
            <br/>

        <label>Item Description:</label>
        <input class="itemDescription" id="entrybox" name="itemDescription" placeholder="Enter item description..." required/>
            <br/>
            
        <label>Select Category:</label>
        <select id="selectCategory" class="selectCategory" name="selectCategory" required>
            <option value="" hidden disabled selected>Select category:</option>
            <option value="Home">Home</option>
            <option value="Toys">Toys</option>
            <option value="Auto">Auto</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Art">Art</option>
            <option value="Jewelry">Jewelry</option>
        </select> <br/>

        <label>Select Condition:</label>
        <select id="selectCondition" class="selectCondition" name="selectCondition" required>
            <option value="" hidden disabled selected>Select Item Condition:</option>
            <option value="Very Used">Very Used</option>
            <option value="Lightly Used">Lightly Used</option>
            <option value="Like New">Like New</option>
            <option value="Mint">Mint</option>
            <option value="Brand Nu">Brand Nu</option>
        </select> 
        <br/>
        
        <label>Enter estimated value:</label>
        <input class="estimatedValue" type="number" name="estimatedValue" placeholder="Enter estimated value..." required/>

        <br/>
        <input class="createListingButton" id="createListingButton" type="submit" value="Create Listing!" />
    </form>
        </div>
    )
};

export default AddListing;