import React, { Component } from 'react';
import { render } from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const responseGoogle = response => {
      console.log(response);
      const idToken = response.tokenId;
      console.log('token here', idToken);
      axios.get('/validate', {
        headers: {
          tokenType: 'Bearer',
          authorization: idToken
        }
      });
    };

    return (
      <div className="loginPage">
        <h1 id="loginHeader">Welcome to SWAP!</h1>
        <GoogleLogin
          clientId="382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          fetchBasicProfile="true"
        />
      </div>
    );
  }
}

export default LoginPage;
