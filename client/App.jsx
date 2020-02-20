import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import NavContainer from './containers/NavContainer.jsx';

class App extends Component {

  render() {
    return (
      <div id="App">
        <NavContainer />
        <MainContainer />
      </div>
    )
  }
}

export default App;