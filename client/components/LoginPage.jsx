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
      const idToken = response.tokenId;
      axios.get('/validate', {
        headers: {
          tokenType: 'Bearer',
          authorization: idToken
        }
      });
    };

    return (
      <div className="loginBox">

        <h1 className="loginWelcome">S W A P</h1>

            <div className="loginText1"> 
                <i> Charter your next barter with eaze </i>
                </div>

            <div className="loginText2">
                ↠ Click below to sign in or create an account with Google™ 
            </div>

        <GoogleLogin
          className="googleLogin"
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
