import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Header.module.css'
import headerImg from '../../src/images/header.png'
import Typewriter from 'typewriter-effect';
const Header = () => {




    return (
        <Box  className={styles.header} >

            <Grid style={{
                width: '90%',
                margin: '0 auto'
            }} container spacing={5}>
                <Grid style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }} item xs={12} md={6}>
                    <Typography style={{ color: '#0dd96e' }} variant='h2'>
                        Government Muslim High School
                    </Typography>
                    <Typography style={{ color: 'white' }} variant='h4'>
                        
                            <Typewriter
                            options={{
                                strings:`Government of the People's Republic of Bangladesh`,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src={headerImg}></Image>
                </Grid>

            </Grid>


        </Box>
    );
};

export default Header;