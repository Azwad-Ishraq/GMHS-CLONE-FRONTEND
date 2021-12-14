import { Box, Button,  Grid, TextField, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import styles from '../../styles/Footer.module.css'
import { ThemeProvider } from '@mui/material/styles';
const Footer = () => {
  
  const Darktheme = createTheme({
    palette: {
      primary: {
        main: '#2e3192',
      },
      secondary: {
        main: '#02a650',
        
      },
      
      mode:'dark'
     
    },
  
  });
    return (
        <Box className={styles.footer} sx={{mt:8,p:5}}>
            <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
            <Typography style={{color:'white'}} variant='h5'>
                Our Schools
            </Typography>
          <ul className={styles.ul}>
              <li>School Directory</li>
              <li>School Boundaries</li>
              <li>School Safety</li>
              <li>Registration and Relocation</li>

          </ul>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
            <Typography style={{color:'white'}} variant='h5'>
                Result
            </Typography>
          <ul className={styles.ul}>
            <li>Result List</li>
            <li>Result Search</li>
            <li>S.S.C Result</li>
            <li>J.S.C Result</li>
            <li>P.S.C Result</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography style={{color:'white'}} variant='h5'>
              Contact
          </Typography>
          <ul className={styles.ul}>
              <li>Address: Govt Muslim High School,Kotwali Chattogram</li>
              <li>Phone: +88-031-637979</li>
          </ul>
        </Grid>
        <Grid xs={6} sm={4} md={3}>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'

        }}>

          <ThemeProvider theme={Darktheme}>
          <TextField color='secondary'   id="standard-basic" label="Email" variant="standard" />
          </ThemeProvider>
        
        <Button color='secondary' sx={{mt:2}} variant="outlined">Subscribe</Button>
        </div>
        </Grid>
      </Grid>
        </Box>
    );
};

export default Footer;