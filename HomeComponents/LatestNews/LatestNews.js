import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard/NewsCard';
import styles from '../../styles/LatestNews.module.css'
const LatestNews = ({news}) => {

  

    return (
        <Container style={{height:'70vh'}}>
            <Typography sx={{mb:5,p:2,borderRadius:3}} color='secondary' style={{textAlign:'left',backgroundColor:'white'}} variant='h4'>
                Latest News
            </Typography>


            
              
                
                <Box className={styles.slide}>
                     {
                   news.map(item => 
                       <NewsCard news={item}></NewsCard>
                   )
               }
                </Box>
      
   

        </Container>
    );
};

export default LatestNews;