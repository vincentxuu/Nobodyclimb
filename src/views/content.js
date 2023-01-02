import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as LogoIcon } from '../images/logo/Nobodylimb-white.svg';
import imgintro from '../images/photo/cont-intro.png';
import imgabout from'../images/photo/cont-about.jpg';
import Button from '@mui/material/Button';
import PersonCard from '../components/CardPerson';
import CardBlog from '../components/CardBlog';
import CardPhotoSelect from'../components/CardPhotoSelect';



const ContentWrapper = styled.div`

`;
const ContIntro = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    background:linear-gradient(0deg, rgba(36, 36, 36, 0.4), rgba(36, 36, 36, 0.4)),url(${imgintro});
    background-size:cover;
    color:#FFFFFF;
    h1{
        font-family: 'Glow Sans TC';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 173.3%;
        padding-top:128px;

    }
    p{
        width:503px;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        text-align:center;
        padding-top:44px;
        padding-bottom:195px;

    }
`;
const ContPerson = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-top:40px;
    Button{
        margin-top:40px;
        margin-bottom:64px;
        background-color:#1B1A1A;
        border:1px solid  #1B1A1A ;
        &:hover {
        background-color:#FFE70C;
        color:#1B1A1A;
        border:#1B1A1A;
        border:1px solid  #1B1A1A ;
        }
    }
`;
const ContBlog = styled.div`
    border-top:1px solid #D2D2D2;
    text-align: center;
    h1{
        font-family: 'Glow Sans TC';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 173.3%;
    }
    p{
        color:#6D6C6C;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    }

`;

const ContPhoto = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    border-top:1px solid #D2D2D2;
    text-align: center;
    h1{
        font-family: 'Glow Sans TC';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 173.3%;
    }
    p{
        color:#6D6C6C;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        margin-bottom:28px;

    }
    Button{
        margin-top:40px;
        margin-bottom:64px;
        border:1px solid  #1B1A1A ;
        color:#1B1A1A;
        &:hover {
        background-color:#DBD8D8;
        color:#1B1A1A;
        border:#1B1A1A;
        border:1px solid  #1B1A1A ;
        }
    }
`;
const ContAbout = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(180deg, #F5F5F5 1.35%, rgba(255, 255, 255, 0.33) 100%),url(${imgabout});
    background-size: cover;
    h2{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        padding-top: 174px;
        padding-bottom:8px;


    }
    p{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight:500;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        width: 582px;
        padding-top:16px;
        padding-bottom: 174px;
    }
    svg{
        width:40px;
        height:4px;
    }

`;

const Content = () =>{
    return(
        <ContentWrapper>
            <ContIntro>
                <h1>小人物攀岩</h1>
                <LogoIcon/>
                <p>攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。</p>
            </ContIntro>
            <ContPerson>
                <PersonCard/>
                <Button  variant="contained"  size="large" >認識小人物</Button>
            </ContPerson>
            <ContBlog>
                <h1>探索攀岩</h1>
                <p>關於攀岩的各種知識和故事</p>
                <CardBlog/>
            </ContBlog>
            <ContPhoto>
                <h1>精選影像</h1>
                <p>看看小人物們攀岩的英姿吧</p>
                <CardPhotoSelect/>
                <Button  variant="outlined"  size="large"  >看更多影像</Button>
            </ContPhoto>
            <ContAbout>
                <h2>關於小人物攀岩</h2>
                <svg>
                    <rect id="box" x="0" y="0" width="40" height="4"/>
                </svg>
                <p>緣起於一個 Nobody 很喜歡這項運動，希望有更多 Nobody 也能一起來 Climb 
                    <br/>當然過程中一定會有一些疑惑，或許這裡能帶給你一些解答或收穫
                </p>
            </ContAbout>
        </ContentWrapper>

    );
};

export default Content;