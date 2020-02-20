import React, { Component } from 'react';
import Main from './containers/MainContainer.jsx';
import Navbar from './containers/NavContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}

export default App;