import React, { useState } from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { border, Box } from "@mui/system";
import { ReactComponent as LogoIcon } from "../../images/logo/Nobodylimb-black.svg";
import { ReactComponent as SearchIcon } from "../../images/icon/icon_search.svg";
import NavMenu from "../../components/NavMenu";
import SideBar from "../../components/SideBar";

const HeaderWrapper = styled.div`
  height: 83px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    background-color: #ffe70c;
    flex-direction: column;
    height: auto;
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    background-color: #ffffff;
    display: none;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  background-color: #ffe70c;
  padding: 20px 32px;
  @media (max-width: 767px) {
    padding: 23px 8px;
  }
`;
const Search = styled.div`
  padding: 20px 20px;
  @media (max-width: 767px) {
    background-color: #ffe70c;
    padding: 20px 32px;
    display: none;
    form {
      background-color: #ffe70c;
    }
  }
`;
const Nav = styled.div`
  padding: 28px 80px 28px 32px;
  button {
    color: black;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 767px) {
    padding: 18px 0px 18px 0px;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
`;
const SignIn = styled.div`
  padding: 28px 32px;
`;

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Box
          sx={{
            display: "none",
            "@media (max-width: 767px)": {
              display: "contents",
            },
          }}
        >
          <MenuIcon onClick={showSiderbar} />
          {sidebar && <SideBar active={setSidebar} />}
        </Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <LogoIcon />
          </Logo>
        </Link>
        <Search>
          <Paper
            elevation={2}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 400,
              boxShadow: "none",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 2, flex: 1 }} />
          </Paper>
        </Search>
      </HeaderLeft>
      <HeaderRight>
        <Nav>
          <ul>
            <li>
              <Link to="/biography">
                <Button variant="text">人物誌</Button>
              </Link>
            </li>
            <li>
              <Link to="/climbSpot">
                <Button variant="text">岩場介紹</Button>
              </Link>
            </li>
            <li>
              <Link to="/photoalbum">
                <Button variant="text">攝影集</Button>
              </Link>
            </li>
            <li>
              <NavMenu />
            </li>
          </ul>
        </Nav>
        <SignIn>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              style={{ width: "104px", color: "black", textDecoration: "none" }}
            >
              登入
            </Button>
          </Link>
        </SignIn>
      </HeaderRight>
    </HeaderWrapper>
  );
};
export default Header;
