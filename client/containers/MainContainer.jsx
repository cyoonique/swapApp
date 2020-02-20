import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

import TopNavBar from "../components/topNavBar.jsx";
// import SwapContainer from "./SwapContainer.jsx";


const mapStateToProps = state => ({
    //toggles for rendering based off of navBar
    loginDisplayTog: state.rendering.loginDisplayTog,
});

const mapDispatchToProps = dispatch => ({
    loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),

});

class MainContainer extends Component {
    render(props) {
        return (
            <main>
                <div id="mainContainer">

                    <button id="test" onClick={() => { 
                        console.log('I got clicked') 
                        this.props.loginDisplayToggle();
                        console.log(this.props.loginDisplayTog);
                        }} > 
                    test me!
                    </button>

                    
                    <TopNavBar />
                    {/* <SwapContainer /> */}
                </div>
            </main>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);