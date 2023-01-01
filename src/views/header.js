import React from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';


import { ReactComponent as LogoIcon } from '../images/logo/Nobodylimb-black.svg';
import {ReactComponent as SearchIcon} from '../images/icon/icon_search.svg';
import {ReactComponent as ArrowIcon} from '../images/icon/nav-arrow-down.svg';
const HeaderWrapper = styled.div`
    height:80px;
    background-color:#FFFFFF;
    display: flex;
    justify-content: space-between;
`;
const HeaderRight = styled.div`
    display: flex;
`
const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Logo = styled.div`
    background-color:#FFE70C;
    padding:20px 32px;   

`;
const Search = styled.div`
    padding:20px 20px;  
`;
const Nav = styled.div`
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding:28px 32px;
    a{
        margin-left:48px;
        text-decoration: none;
        color: black;
    };
    svg{
        position: relative;
        top: 50%;  
        left:3%;
        transform: translate(-50%, -50%);
    };
    &:hover::after {
        
    }
`;
const SignIn = styled.div`
    padding:28px 32px;
`;

const Header = () =>{
    return(
        <HeaderWrapper>
            <HeaderRight>
            <Logo>
                <LogoIcon/>
            </Logo>
            <Search>
                <Paper elevation={2}
                component="form" 
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ ml: 2, flex: 1 }}/>
                </Paper>
            </Search>
            </HeaderRight>
            <HeaderLeft>
            <Nav>
                <a href="#">人物誌</a>
                <a href="#">岩場介紹</a>
                <a href="#">攝影集</a>
                <a href="#">專欄文章<ArrowIcon/></a>
            </Nav>
            <SignIn>
                <Button  variant="outlined" color='inherit' size="large">登入</Button>
            </SignIn>
            </HeaderLeft>
        </HeaderWrapper>
    );
};
export default Header;  