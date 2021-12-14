import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from '../../../styles/Gallery.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Gallery = () => {
    const images = [
          `https://i.ibb.co/BjCKt56/1.jpg` ,
          `https://i.ibb.co/8d4ndwy/2.jpg` ,
          `https://i.ibb.co/NStQVHG/3.jpg` ,
          `https://i.ibb.co/zxWkR2p/4.jpg` ,
          `https://i.ibb.co/BZc1Jpt/5.jpg`
    ]
    return (
        <Box data-aos="fade-right" sx={{mt:10,mb:5}}>
            <Container style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography color='secondary' sx={{mb:5}} variant='h4'>
                    Photo Gallery
            </Typography>
                
            <Slide>
         {images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage})`}}>
                
              </div>
            </div>
          ))} 
        </Slide>
            </Container>
        </Box>

    );
};

export default Gallery;

