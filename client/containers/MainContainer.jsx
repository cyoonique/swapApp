import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";


import TopNavBar from "../components/topNavBar.jsx";
import LoginPage from "../components/loginPage.jsx";

// import SwapContainer from "./SwapContainer.jsx";


const mapStateToProps = state => ({
    //toggles for rendering based off of navBar
    loginDisplayTog: state.rendering.loginDisplayTog,
    signupDisplayTog: state.rendering.signupDisplayTog,
});

const mapDispatchToProps = dispatch => ({
    loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),
    signupDisplayToggle: () => dispatch(actions.signupDisplayToggle()),

});

class MainContainer extends Component {
    render(props) {

        let loginPage;
        if (this.props.loginDisplayTog === true) {
            loginPage = (
                <LoginPage
                        loginDisplayToggle={this.props.loginDisplayToggle}
                        loginDisplayTog={this.props.loginDisplayTog}
                        signupDisplayToggle={this.props.signupDisplayToggle}
                     />
            )
        }
        return (
            <main>

                <div id="mainContainer">
                    <div className="loginPage"> {loginPage} </div>


                    {/* <button id="test" onClick={() => { 
                        console.log('I got clicked') 
                        this.props.loginDisplayToggle();
                        console.log(this.props.loginDisplayTog);
                        }} > 
                    test me!
                    </button> */}

                    <img src="logo.jpg"></img>
                    <TopNavBar />
                    {/* <SwapContainer /> */}
                </div>
            </main>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);