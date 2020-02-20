import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";


import TopNavBar from "../components/topNavBar.jsx";
import LoginPage from "../components/loginPage.jsx";
import Feed from "../components/Feed.jsx";


const mapStateToProps = state => ({
    //toggles for rendering based off of navBar
    loginDisplayTog: state.rendering.loginDisplayTog,
    signupDisplayTog: state.rendering.signupDisplayTog,
    feedDisplayTog: state.rendering.feedDisplayTog,
});

const mapDispatchToProps = dispatch => ({
    loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),
    signupDisplayToggle: () => dispatch(actions.signupDisplayToggle()),
    feedDisplayToggle: () => dispatch(actions.feedDisplayToggle()),

});

class MainContainer extends Component {
    render(props) {

        //below is the conditional rendering logic for the login page
        let loginPage;
        if (this.props.loginDisplayTog === true) {
            loginPage = (
                <LoginPage
                        loginDisplayToggle={this.props.loginDisplayToggle}
                        loginDisplayTog={this.props.loginDisplayTog}
                        signupDisplayToggle={this.props.signupDisplayToggle}
                        feedDisplayToggle={this.props.feedDisplayToggle}
                     />
            )
        }

        let swapContainer;
        if (this.props.feedDisplayTog === true) {
            swapContainer = (
                <Feed/>
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

                    <div className="navBarContainer">
                    <TopNavBar />
                    </div>

                    <div className="swapContainer">
                    {swapContainer}
                    </div>

                </div>
            </main>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);