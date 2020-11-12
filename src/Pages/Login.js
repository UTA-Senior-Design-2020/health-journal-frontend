import React from 'react';
import Logout from "./Logout";
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  //'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'; // repo
  '942750184455-7olak18vor3fmoh9j5n0tfm0rbdbip9o.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res);
    alert(
      `Logged in successfully. Welcome ${res.profileObj.name}. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  //time to stylize 
  return (
    <div style={{ marginTop: "10%" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // style={{ marginTop: '10%' }}
        //isSignedIn={true}
      />
      <Logout />
    </div>
  );
}

export default Login;
