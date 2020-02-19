import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

import Navbar from "../components/Navbar.jsx";
import SwapContainer from "./SwapContainer.jsx";


const mapStateToProps = state => ({
    //toggles for rendering based off of navBar

});

const mapDispatchToProps = dispatch => ({


});

class MainContainer extends Component {
    render(props) {
        return (
            <main>
                <div id="main">
                    <Navbar />
                    <SwapContainer />
                </div>
            </main>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);