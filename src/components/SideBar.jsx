import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";

const Container = styled.div`
  z-index: 2;
  background-color: white;
  position: absolute;
  height: 450px;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  > svg {
    position: absolute;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

const Content = styled.div`
  margin-top: 100px;
  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
  }
`;

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <CloseIcon onClick={closeSidebar} />
      <Content>
        <Link to="/home">
          <SideBarItem Text="Home" />
        </Link>
        <Link to="/biography">
          <SideBarItem Text="人物誌" />
        </Link>
        <Link to="/climbSpot">
          <SideBarItem Text="岩場介紹" />
        </Link>
        <Link to="/photoalbum">
          <SideBarItem Text="攝影集" />
        </Link>
        <Link to="/blog">
          <SideBarItem Text="專欄文章" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
