import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as LogoIconWhite} from '../images/logo/Nobodylimb-white.svg';
import {ReactComponent as IconFacebook} from '../images/icon/icon-facebook.svg';
import {ReactComponent as IconInstagram} from '../images/icon/icon-instagram.svg';
import {ReactComponent as IconMail} from '../images/icon/icon-mail.svg';



const FooterWapper = styled.div`
    background: #1B1A1A;
    display:flex;
    justify-content:space-between;
    align-items: center;
    p{
        color:#8E8C8C;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 350;
        font-size: 14px;
        line-height: 150%;
    }
    svg{
        padding:60px 0px 60px 166px;
    }
`
const FooterIcon = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-right:160px;
    margin-left:65px;

    svg{
        height:30px;
        width:30px;
        background-color:#DBD8D8;
        border-radius: 31px;
        padding:5px;
        margin:3px;
    }
`


const Footer = () =>{
    return(
        <FooterWapper>
            <LogoIconWhite/>
            <p>NobodyClimb © 2022.</p>
            <FooterIcon>
                <IconFacebook/>
                <IconInstagram/>
                <IconMail/>
            </FooterIcon>
        </FooterWapper>
    );
};

export default Footer;