import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { auth, provide } from "../config/firebase";
import Navigation from "../shared/components/Navigation";

const ProfileWrapper = styled.div`
  background-color: #f9f9f9;
`;

const LINE_CHANELL_ID = "1660781575";
const LINE_CHANELL_SECRET = "dc630138c2dcbdd7fee53f262c0c92e3";
const LINE_REDIRECT_URL = "http://localhost:3000/profile";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codes = params.get("code");
    const options = {
      grant_type: "authorization_code",
      code: codes,
      redirect_uri: LINE_REDIRECT_URL,
      client_id: LINE_CHANELL_ID,
      client_secret: LINE_CHANELL_SECRET,
    };
    axios
      .post(
        "https://api.line.me/oauth2/v2.1/token",
        {
          headers: {
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
        options,
  })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <ProfileWrapper>
      <Navigation />
      {user && <div>{user.displayName}</div>}
    </ProfileWrapper>
  );
};

export default Profile;
