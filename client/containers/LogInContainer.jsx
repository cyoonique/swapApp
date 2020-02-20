import React from 'react';
import ReactDOM from 'react-dom';
import {
  GoogleLogin,
  GoogleLogout,
  useGoogleLogin,
  useGoogleLogout
} from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};

const { signIn, loaded } = useGoogleLogin({
  onSuccess,
  clientId,
  cookiePolicy,
  loginHint,
  hostedDomain,
  autoLoad,
  isSignedIn,
  fetchBasicProfile,
  redirectUri,
  discoveryDocs,
  onFailure,
  uxMode,
  scope,
  accessType,
  responseType,
  jsSrc,
  onRequest,
  prompt
});

const { signOut, loaded } = useGoogleLogout({
  jsSrc,
  onFailure,
  clientId,
  cookiePolicy,
  loginHint,
  hostedDomain,
  fetchBasicProfile,
  discoveryDocs,
  uxMode,
  redirectUri,
  scope,
  accessType,
  onLogoutSuccess
});

function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  // profile.getId(), profile.getName(), profile.getEmail()
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    console.log('User signed out');
  });
}

ReactDOM.render(
  <GoogleLogin
    clientId="382771863992-q5lmlrvur70gcssgknk8mlrr8qk9b64c.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  <GoogleLogout
    clientId="382771863992-q5lmlrvur70gcssgknk8mlrr8qk9b64c.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
  />,
  document.getElementById('googleButton')
);
