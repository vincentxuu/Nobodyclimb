import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import CardPerson from '../components/CardPerson';
import ContentPerson from '../components/ContentPerson';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import CoverPhoto from '../images/photo/cover-photo.jpg';
import PersonLeft from '../images/photo/personleft.jpg';
import PersonMid from '../images/photo/personmid.jpg';
import PersonRight from '../images/photo/personright.jpg';
import { ReactComponent as ArrowRightCircle} from'../images/icon/arrow-right-circled.svg';
import { StyleOutlined } from '@mui/icons-material';
import { HashRouter, Route, Link } from "react-router-dom";
import {ReactComponent as ArrowIconLeft} from '../images/icon/arrow-left.svg';



const PersonWrapper = styled.div`
  
    
`

const BackIcon = styled.div`
    background-color:#F5F5F5;
    padding:48px 0px 40px 255px;
    button{
        display:flex;
        border:0px solid  #1B1A1A ;
        background-color:#F5F5F5;
        color:#1B1A1A;
        &:hover {
        background-color:#DBD8D8;
        color:#1B1A1A;
        border:#1B1A1A;
        border:0px solid  #1B1A1A ;
        }
        svg{
            padding-right: 8px;
        }
    }

`

const ContentTop = styled.div`
    background: #F5F5F5;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const ContentBottom = styled.div`
    background-color:#DBD8D8;
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
        padding:40px 0px 24px 0px ;
    }
    text-align: center;
    button{
        margin-top:40px;
        margin-bottom:104px;
        border:1px solid  #1B1A1A ;
        color:#1B1A1A;
        &:hover {
        background-color:#DBD8D8;
        color:#1B1A1A;
        border:#1B1A1A;
        border:1px solid  #1B1A1A ;
        }
    }
`

function Person() {
    
  return (
    <PersonWrapper>
        <Header/>
        <BackIcon>
                <button>
                    <ArrowIconLeft/>
                    <Typography variant="body1" component="p">
                        人物誌
                    </Typography>
                </button>
            </BackIcon>
        <ContentTop>
            <ContentPerson/>
        </ContentTop>            
        <ContentBottom>
            <h2>相關文章</h2>
            <CardPerson/>
             <Link to="/person" style={{textDecoration:'none'}} >
                <Button  variant="outlined"  size="large"  >更多小人物</Button>
            </Link>
        </ContentBottom>
        <Footer/>
    </PersonWrapper>
  );
}
export default Person;
