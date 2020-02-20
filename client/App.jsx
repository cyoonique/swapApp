import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import LogInContainer from './containers/LogInContainer.jsx';

class App extends Component {
  render() {
    return (
      <div id="App">
        <MainContainer />
        <LogInContainer />
      </div>
    );
  }
}

export default App;
