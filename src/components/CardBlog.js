import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlogLeft from '../images/photo/blog-left.png';
import BlogMidLeft from '../images/photo/blog-mid-left.jpg';
import BlogMidRight from '../images/photo/blog-mid-right.jpg';
import BlogRight from '../images/photo/blog-right.jpg';




const CardBlogWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 64px;
`;
const CardBlogLeft = styled.div`
    width:265px;
    height:184px;
    background-image:url(${BlogLeft});
    background-color: rgba(0, 0, 0, .2);
    background-blend-mode: multiply;
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
        transform: translate(0, -50%);
    }
   

`;
const CardBlogMidLeft = styled.div`
    width:265px;
    height:184px;
    background-image:url(${BlogMidLeft});
    background-color: rgba(0, 0, 0, .2);
    background-blend-mode: multiply;
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
        transform: translate(0, -50%);
    }

`;
const CardBlogMidRight = styled.div`
    width:265px;
    height:184px;
    background-image:url(${BlogMidRight});
    background-color: rgba(0, 0, 0, .4);
    background-blend-mode: multiply;
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
        transform: translate(0, -50%);
    }

`;
const CardBlogRight = styled.div`
    width:265px;
    height:184px;
    background-image:url(${BlogRight});
    background-color: rgba(0, 0, 0, .3);
    background-blend-mode: multiply;
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
        transform: translate(0, -50%);
    }
`;
                
const CardBlog = () =>{
    return(
        <CardBlogWrapper>
            <CardBlogLeft>
                <h2>裝備介紹</h2>
            </CardBlogLeft>
            <CardBlogMidLeft>
                <h2>技巧介紹</h2>
            </CardBlogMidLeft>
            <CardBlogMidRight>
                <h2>技術研究</h2>
            </CardBlogMidRight>
            <CardBlogRight>
                <h2>比賽介紹</h2>
            </CardBlogRight>
        </CardBlogWrapper>

    );
};

export default CardBlog;              