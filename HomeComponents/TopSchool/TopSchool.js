import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import school from '../../src/images/topschool.png'
import Image from 'next/image'

const TopSchool = () => {
    return (
        <Container  data-aos="flip-right" sx={{mt:8,mb:5}}>
            <Grid container spacing={5}>
                <Grid  item xs={12} sm={12} md={6}>
                <Image   src={school}></Image>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Typography  sx={{mb:5,p:2,borderRadius:3}} color='secondary' style={{textAlign:'left',backgroundColor:'white'}} variant='h4'>
                    #2 Top School In Chattogram
                </Typography>
                <Typography  style={{textAlign:'left'}} variant='p'>
                Government Muslim High School is a Popular school in Chittagong. Its location is next to the Kotwali police station in Chittagong. Haji Muhammad Mohsin was the financial donor of this school. Moreover, it has more than 2500 students. Govt Muslim High School started its journey for only Muslim students to promote Muslim education. Certainly, it is a Bengali medium school. However, Govt. Muslim High School is only for boys. Firstly, Govt Muslim High school started as a Madrasah. At that time, people called it as Chittagong government Madrasah. Surely, Government Muslim High School is the best school in Chittagong in 2021. Government Muslim High School has a good reputation for cultural activities, academic excellence, and results etc. It is in the 2nd position in the ranking of top 10 school in Chittagong in 2021.
                </Typography>
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default TopSchool;