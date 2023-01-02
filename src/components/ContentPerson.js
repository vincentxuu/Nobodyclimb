import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import {ReactComponent as ArrowIconLeft} from '../images/icon/arrow-left.svg';
import {ReactComponent as ArrowIconRight} from '../images/icon/arrow-right.svg';
import PersonLeft from '../images/photo/personleft.jpg';
import PersonPhotoDown from '../images/photo/person-poto.jpg';

const ContentPersonWrapper = styled.div`
    padding:24px 64px 0px 64px;
    background-color:#FFFFFF;
    h1{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
    }
    h2{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        padding:24px 0px 0px 0px;
        border-bottom: 1px solid #DBD8D8;
    }
    p{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        padding:24px 0px 0px 0px;

    }
    img{
        width:802px;
        height:360px;
        object-fit: cover;
    }

`

const BackWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding:24px 64px 56px 64px;
    max-width:802px;
    color:#1B1A1A;
    h3{
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color:#1B1A1A  ;
    }
    button{
        display:flex;
        max-width:385px;
        max-height:123px;
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


function ContentPerson() {

  return (
    <ContentPersonWrapper>
        <h1 >攀岩小人物—謝璿</h1>
        <CardHeader
        subheader="更新日期  2023.01.02  "
        />
        <img style = {{maxWidth:'802px',maxheight:'360px'}}  src={PersonLeft} alt="Background" />        
        <h2>哪一年開始攀岩</h2>
        <p>2022</p>
        <h2>平常出沒岩場</h2>
        <p>各大天然岩場、波浪岩館</p>
        <h2>喜歡的路線型態</h2>
        <p>差一點快爬完但爬不完的都喜歡</p>
        <h2>踏上攀岩不歸路的原因</h2>
        <p>朋友、男朋友、成就感</p>
        <h2>攀岩對你來說，是什麼樣的存在</h2>
        <p>生活規律有目標、有運動、有社交</p>
        <h2>在攀岩世界裡，想做的人生清單有什麼</h2>
        <img style = {{width:'100%'}}  src={PersonPhotoDown} alt="Background" />        
        <p>大牆攀登</p>
        <h2>對於初踏入攀岩的岩友，留言給他們的一句話</h2>
        <p>慢慢來比較快不要受傷</p>
        <BackWrapper>
            <Button variant="outlined">
                <ArrowIconLeft/>
                <h3>上一篇</h3>
            </Button>
            <Button variant="outlined">
                <h3>下一篇</h3>
                <ArrowIconRight/>
            </Button>
        </BackWrapper>
    </ContentPersonWrapper>
  );
}

export default ContentPerson;