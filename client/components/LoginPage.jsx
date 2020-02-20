import React, { Component } from 'react';
import {
  GoogleLogin,
  GoogleLogout,
  useGoogleLogin,
  useGoogleLogout
} from 'react-google-login';
import axios from 'axios';
import { render } from 'react-dom';
import { ResolvePlugin } from 'webpack';

class loginPage extends Component {
  constructor(props) {
    super(props);
  }

  // onSignIn(googleUser) {
  //   const profile = googleUser.getBasicProfile();
  //   profile.getId(), profile.getName(), profile.getEmail();
  //   return new Promise(resolve => {
  //     let form = new FormData();
  //     const idToken = googleUser.getAuthResponse().id_token;
  //     if (!idToken) {
  //       throw 'Authentication failed.';
  //     }
  //     form.append('id_token', idToken);
  //     return fetch('/validate', {
  //       method: 'POST',
  //       body: form,
  //       credntials: 'include'
  //     }).then(resp => {
  //       if (resp.status === 200) {
  //         resolve(googleUser);
  //       } else {
  //         throw 'Authentication failed.';
  //       }
  //     });
  //   });
  // }

  render() {
    const responseGoogle = response => {
      console.log(response);
      const idToken = response.id_token;
      axios.get('/validate', {
        headers: 'Bearer',
        idToken: idToken
      });
    };
    return (
      <div className="loginPage">
        <h1 id="loginHeader">Welcome to SWAP!</h1>
        <GoogleLogin
          clientId="382771863992-q5lmlrvur70gcssgknk8mlrr8qk9b64c.apps.googleusercontent.com"
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

export default loginPage;
