import React from 'react';
import styled from '@emotion/styled';
import phototopleft from'../images/photo/cont-photo-top-left.jpg';
import phototopright from'../images/photo/cont-photo-top-right.jpg';
import photomidleft from'../images/photo/cont-photo-mid-left.jpg';
import photomidright from'../images/photo/cont-photo-mid-right.jpg';
import photobottomleft from'../images/photo/cont-photo-bottom-left.jpg';
import photobottomright from'../images/photo/cont-photo-bottom-right.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




const CardPhotoSelectWrapper = styled.div`
    width:1440px;
`;

const CardPhotoBig = styled.div`
    img{
        width:740px;
        height:312px;
        object-fit: cover;
    }
`;
const CardPhotoSmall = styled.div`
    width:368px;
    height:312px;
`;

const CardPhotoSelect = () => {
  return (
    <CardPhotoSelectWrapper>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
            <div className='grid-elements'>
                <CardPhotoBig>
                    <img style = {{width:'100%'}}  src={phototopleft} alt="Background" />
                </CardPhotoBig>
            </div>
        </Grid>
        <Grid item xs={6} md={4}>
            <div className='grid-elements'>
                <CardPhotoSmall>
                    <img style = {{height:'100%'}}  src={phototopright} alt="Background" />
                </CardPhotoSmall>
            </div>
        </Grid>
        <Grid item xs={6} md={4}>
            <div className='grid-elements'>
                <CardPhotoSmall>
                    <img style = {{height:'100%'}} src={photomidleft} alt="Background" />
                </CardPhotoSmall>            
            </div>
        </Grid>
        <Grid item xs={6} md={8}>
            <div className='grid-elements'>
                <CardPhotoBig>
                    <img style = {{width:'100%'}} src={photomidright} alt="Background" />
                </CardPhotoBig>          
            </div>
        </Grid>
        <Grid item xs={6} md={8}>
            <div className='grid-elements'>
                <CardPhotoBig>
                    <img style = {{width:'100%'}}  src={photobottomleft} alt="Background" />
                </CardPhotoBig>
            </div>
        </Grid>
        <Grid item xs={6} md={4}>
            <div className='grid-elements'>
                <CardPhotoSmall>
                    <img style = {{height:'100%'}}  src={photobottomright} alt="Background" />
                </CardPhotoSmall>
            </div>
        </Grid>
      </Grid>
    </Box>
    </CardPhotoSelectWrapper>
  );
};

export default CardPhotoSelect;