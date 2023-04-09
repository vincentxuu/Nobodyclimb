import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { signInWithPopup } from "firebase/auth";
import Navigation from "../shared/components/Navigation";

const ProfileWrapper = styled.div`
  background-color: #f9f9f9;
`;
const LINE_CHANELL_ID = "1660781575";
const LINE_CHANELL_SECRET = "dc630138c2dcbdd7fee53f262c0c92e3";
const LINE_REDIRECT_URL = "http://localhost:3000/profile";
const Profile = () => {
  const params = new URLSearchParams(window.location.search);
  const codes = params.get("code");
  console.log({ codes });

  fetch(`https://api.line.me/oauth2/v2.1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: codes,
      client_id: LINE_CHANELL_ID,
      client_secret: LINE_CHANELL_SECRET,
      redirect_uri: LINE_REDIRECT_URL,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      fetch("https://api.line.me/v2/profile", {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((profile) => {
          const loginText = document.querySelector("#login");
          console.log(` ${profile.displayName}`);
        });
    })
    .catch((error) => console.error(error));
  return (
    <ProfileWrapper>
      <Navigation />
    </ProfileWrapper>
  );
};
export default Profile;
