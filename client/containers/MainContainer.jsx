import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

import TopNavBar from '../components/topNavBar.jsx';
import LoginPage from '../components/loginPage.jsx';
import Feed from '../components/Feed.jsx';

const mapStateToProps = state => ({
  //toggles for rendering based off of navBar
  loginDisplayTog: state.rendering.loginDisplayTog,
  signupDisplayTog: state.rendering.signupDisplayTog,
  feedDisplayTog: state.rendering.feedDisplayTog
});

const mapDispatchToProps = dispatch => ({
  loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),
  signupDisplayToggle: () => dispatch(actions.signupDisplayToggle()),
  feedDisplayToggle: () => dispatch(actions.feedDisplayToggle())
});

class MainContainer extends Component {
  render(props) {
    //conditionally rendering swapContainer to show feed upon logging in, but not when you click on any other link in navbar
    let swapContainer;
    if (this.props.feedDisplayTog === true) {
      swapContainer = <Feed />;
    }

    return (
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="navBarContainer">
            <TopNavBar feedDisplayToggle={this.props.feedDisplayToggle} />
          </div>
          <LoginPage />
          <div className="swapContainer">{swapContainer}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
