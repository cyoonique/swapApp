import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";


import TopNavBar from "../components/topNavBar.jsx";
import LoginPage from "../components/loginPage.jsx";
import Feed from "../components/Feed.jsx";

// import SwapContainer from "./SwapContainer.jsx";


const mapStateToProps = state => ({
    //toggles for rendering based off of navBar
    loginDisplayTog: state.rendering.loginDisplayTog,
    feedDisplayTog: state.rendering.feedDisplayTog,

});

const mapDispatchToProps = dispatch => ({
    loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),
    feedDisplayToggle: () => dispatch(actions.feedDisplayToggle()),

});

class MainContainer extends Component {
    render(props) {
         //below is the conditional rendering logic for the login page
        let loginPage;
        if (this.props.loginDisplayTog === true) {
            loginPage = (
                <div className="loginPage"><LoginPage
                        loginDisplayToggle={this.props.loginDisplayToggle}
                        loginDisplayTog={this.props.loginDisplayTog}
                     />
                </div>
            )
        }

        //conditionally rendering swapContainer to show feed upon logging in, but not when you click on any other link in navbar
        let swapContainer;
        if (this.props.feedDisplayTog === true) {
            swapContainer = (
                <Feed/>
            )
        }
        return (
            <div className="fullscreen">

                {loginPage} 

                <div className="mainContainer">


                <div id="mainContainer">
             

                    {/* <button id="test" onClick={() => { 
                        console.log('I got clicked') 
                        this.props.loginDisplayToggle();
                        console.log(this.props.loginDisplayTog);
                        }} > 
                    test me!
                    </button> */}
                    <div className="navBarContainer">
                        <TopNavBar 
                            feedDisplayToggle={this.props.feedDisplayToggle}
                        />
                    </div>

                    <div className="swapContainer">
                    {swapContainer}
                    </div>

                </div>
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);