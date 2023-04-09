import React, { useState } from "react";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Tab,
  Button,
  Box,
  Typography,
  Divider,
  Skeleton,
  TextField,
} from "@mui/material";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import imgintro from "../images/photo/cont-intro.jpeg";
import Navigation from "../shared/components/Navigation";
import app from "../config/firebase";

const LoginWrapper = styled.div`
  background-color: #f9f9f9;
`;
const Content = styled.div`
  width: 930px;
  height: 581px;
  background-color: #ffffff;
  margin: 64px auto 64px auto;
  display: flex;
`;

const TabListStyle = styled(TabList)`
  color: black;
  border-color: black;
  border-bottom: black;
`;
const LINE_CHANELL_ID = "1660781575";
const LINE_CHANELL_SECRET = "dc630138c2dcbdd7fee53f262c0c92e3";
const LINE_REDIRECT_URL = "http://localhost:3000/";
const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const googleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  const lineLogin = () => {
    let URL = "https://access.line.me/oauth2/v2.1/authorize?";
    URL += "response_type=code";
    URL += `&client_id=${LINE_CHANELL_ID}`;
    URL += `&redirect_uri=${LINE_REDIRECT_URL}`;
    URL += "&state=123456789";
    URL += "&scope=openid%20profile";
    URL += "&nonce=helloWorld";
    URL += "&prompt=consent";
    URL += "&max_age=3600";
    URL += "&ui_locales=zh-TW";
    URL += "&bot_prompt=normal";
    window.open(URL, "_self");
  };
  const [activeItem, setActiveItem] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onRegister = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential;
  //       // ...
  //       console.log(user);
  //       alert("Sucessfully create an account");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       // ..
  //       alert(errorCode);
  //     });
  // };
  // const onLogin = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const { user } = userCredential;
  //       // ...
  //       alert("you have successfully login");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       console.log(errorCode);
  //     });
  // };

  const onSubmit = () => {
    if (activeItem === "register") {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
    } else if (activeItem === "login") {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
    }
  };
  return (
    <LoginWrapper>
      <Navigation />
      <Content>
        <Box>
          <img
            src={imgintro}
            alt=""
            style={{ width: "464px", height: "581px", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ width: "100%", typography: "body1", padding: "5%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Button
              variant="text"
              style={{
                width: "50%",
                color: "black",
              }}
              active={activeItem ? "login" : undefined}
              onClick={() => setActiveItem("login")}
            >
              登入
            </Button>
            <Button
              variant="text"
              style={{ width: "50%", color: "black" }}
              active={activeItem ? "register" : undefined}
              onClick={() => setActiveItem("register")}
            >
              註冊
            </Button>
          </Box>
          <Box>
            <Box component="form" noValidate autoComplete="off">
              <Typography>E-mail</Typography>
              <TextField
                sx={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入信箱"
              />
              <Typography>密碼</Typography>
              <TextField
                sx={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入密碼"
              />
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "44px",
                  color: "white",
                  backgroundColor: "black",
                  margin: "20px 0 32px 0",
                }}
                onClick={onSubmit}
              >
                {activeItem === "register" && "註冊"}
                {activeItem === "login" && "登入"}
              </Button>
            </Box>
            <Divider>或</Divider>
            <Box
              style={{
                height: "108px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "black",
              }}
            >
              <Button
                variant="outlined"
                onClick={googleLogin}
                color="inherit"
                style={{ color: "black" }}
              >
                使用Google登入
              </Button>
              <Button
                variant="outlined"
                onClick={lineLogin}
                color="inherit"
                style={{ color: "black" }}
              >
                使用Line登入
              </Button>
            </Box>
          </Box>
        </Box>
      </Content>
    </LoginWrapper>
  );
};
export default Login;
