import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '942750184455-7olak18vor3fmoh9j5n0tfm0rbdbip9o.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;