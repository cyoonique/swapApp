import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

import LoginPage from "../components/loginPage.jsx";
import topNavBar from "../components/topNavBar.jsx";
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

        let loginPage;
        if (this.props.loginDisplayTog === true) {
            loginPage = (
                <LoginPage
                        loginDisplayToggle={this.props.loginDisplayToggle}
                        loginDisplayTog={this.props.loginDisplayTog}
                     />
            )
        }
        return (
            <main>
                <div id="main">
                    <div className="loginPage"> {loginPage} </div>

                    {/* <button id="test" onClick={() => { 
                        console.log('I got clicked') 
                        this.props.loginDisplayToggle();
                        console.log(this.props.loginDisplayTog);
                        }} > 
                    test me!
                    </button> */}

                    
                    <topNavBar />
                    {/* <SwapContainer /> */}
                </div>
            </main>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);