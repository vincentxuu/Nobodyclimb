import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonLeft from '../images/photo/personleft.jpg';
import PersonMid from '../images/photo/personmid.jpg';
import PersonRight from '../images/photo/personright.jpg';
import { ReactComponent as ArrowRightCircle} from'../images/icon/arrow-right-circled.svg';



const CardArticleWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 64px;
`;
const CardArticleLeft = styled.div`
    width:265px;
    height:184px;
    background-image:url(${PersonLeft});
    background-size:cover;
    border-radius: 8px;
    color:#FFFF;
    text-align: center;
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
        position: relative;
        top: 50%;  
        transform: translate(0, -100%);
    }
   

`;
const CardArticleMidLeft = styled.div`
    width:265px;
    height:184px;
    background-image:url(${PersonLeft});
    background-size:cover;
    border-radius: 8px;
    color:#FFFF;
    text-align: center;
    margin-left:20px;
    margin-right:10px;
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
        position: relative;
        top: 50%;  
        transform: translate(0, -100%);
    }

`;
const CardArticleMidRight = styled.div`
    width:265px;
    height:184px;
    background-image:url(${PersonLeft});
    background-size:cover;
    border-radius: 8px;
    color:#FFFF;
    text-align: center;
    margin-left:10px;
    margin-right:20px;
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
        position: relative;
        top: 50%;  
        transform: translate(0, -100%);
    }

`;
const CardArticleRight = styled.div`
    width:265px;
    height:184px;
    background-image:url(${PersonLeft});
    background-size:cover;
    border-radius: 8px;
    color:#FFFF;
    text-align: center;
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
        position: relative;
        top: 50%;  
        transform: translate(0, -100%);
    }
`;
                
const CardArticle = () =>{
    return(
        <CardArticleWrapper>
            <CardArticleLeft>
                <h2>裝備介紹</h2>
            </CardArticleLeft>
            <CardArticleMidLeft>
                <h2>技巧介紹</h2>
            </CardArticleMidLeft>
            <CardArticleMidRight>
                <h2>技術研究</h2>
            </CardArticleMidRight>
            <CardArticleRight>
                <h2>比賽介紹</h2>
            </CardArticleRight>
        </CardArticleWrapper>

    );
};

export default CardArticle;              