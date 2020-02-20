import React, { Component } from 'react';
import Main from './containers/MainContainer.jsx';
import './containers/LogInContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
        <LogInContainer />
      </div>
    );
  }
}

export default App;
