import React from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { ReactComponent as LogoIcon } from "../images/logo/Nobodylimb-black.svg";
import { ReactComponent as SearchIcon } from "../images/icon/icon_search.svg";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  height: 83px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    background-color: #ffe70c;
    flex-direction: column;
    height: 146px;
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
    form {
      background-color: #ffe70c;
    }
  }
`;
const Nav = styled.div`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 28px 80px 28px 32px;
  ul{
    display:flex;
    flex-wrap: wrap;
 
  }
  a {
    margin: 24px;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 767px) {
    padding: 18px 0px 18px 0px;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    a {
    margin: 14px;
  }
  }
`;
const SignIn = styled.div`
  padding: 28px 32px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
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
            <li><Link to="/biography">人物誌</Link></li>
            <li><Link to="/climbSpot">岩場介紹</Link></li>
            <li><Link to="/photoalbum">攝影集</Link></li>
            <li><Link to="/blog">專欄文章</Link></li>
          </ul>
        </Nav>
        {/*<SignIn>
          <Button variant="outlined" color="inherit" size="large">
            登入
          </Button>
        </SignIn>*/}
      </HeaderRight>
    </HeaderWrapper>
  );
};
export default Header;
