import { Container, Typography } from '@mui/material';
import React from 'react';

const Message = () => {
    return (
        <Container data-aos="fade-up" style={{overflowX:'hidden',backgroundColor:'white'}}   sx={{ mt: 5 ,borderRadius:3,p:3}}>
            <Typography   sx={{mb:2}} variant='h4' style={{ textAlign: 'left' ,color:'#02a650'}}>
                Message
            </Typography>


            <Typography   variant='p' style={{ textAlign: 'center' }}>
                I am happy to inform you that Government Muslim High School is going to add a new dimension in our  administrative and academic activities by introducing computer technology (web based) in publishing results and providing all kinds of relevant information about this glorious institution. It is clear that we are advancing through the age of ICT. So, It is very much important to make us more transparent as well as  a skilled citizen in the field of ICT.
                On the other hand, to establish digital Bangladesh every institution should be digitized.  Realizing this truth, we started digitization program for the first time. Any positive advice will be received for the betterment of this activities.


                
                
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography  sx={{mt:5}}  variant='p' style={{fontWeight:'bold'}}>
                Ayesha khatoon
                <br/>
                Head  Teacher (Act.)
                <br/>
                Govt. Muslim High School
                </Typography>
        </Container>
    );
};

export default Message;