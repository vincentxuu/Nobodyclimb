import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
// import { LineLogin } from "react-line-login";

const LoginPage = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [accessToken, setAccessToken] = useState("");

  const responseGoogle = (response) => {
    setIsLoggedin(true);
    setUserProfile(response.profileObj);
    setAccessToken(response.accessToken);
  };

  const responseLine = (response) => {
    setIsLoggedin(true);
    setUserProfile(response.profile);
    setAccessToken(response.token.accessToken);
  };

  return (
    <div>
      {isLoggedin ? (
        <div>
          <p>Welcome {userProfile.name}!</p>
          <p>Your email is {userProfile.email}.</p>
          <p>Your access token is {accessToken}.</p>
        </div>
      ) : (
        <div>
          <GoogleLogin
            clientId="[Google Client ID]"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          {/* <LineLogin
            channelID="[Line Channel ID]"
            channelSecret="[Line Channel Secret]"
            setAccessToken={responseLine}
            botPrompt={"normal"}
            render={({ onClick, isAuthenticated }) => (
              <button onClick={onClick} disabled={isAuthenticated}>
                Login with LINE
              </button>
            )}
          /> */}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
