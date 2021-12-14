import { Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const Rules = () => {
    const rules = [
        'Students prime duty is to study regularly to achieve academic success.They should be hardworking and persevering.',
        'Learn good things to be good human being and a good citizen.',
        'Practice to be truthful and honest.',
        'Try your best to elevate yourself with good thoughts and behavior.',
        'Imbibe yourself with cultural, social and ethical norms / values.',
        'Be obedient and show respect to your parents, teachers and elders and affection to juniors.',
        'Students must abide by the rules and regulations of the institution.',
        'Students should not spoil the properties of the institution. If anything is damaged the concerned student will pay the penalty.',
        'All the students must be punctual in attending school. They must reach before the assembly.',
        'The absentees must submit an application to the principal. In case of a long absence for sickness medical certificate must be shown.',
        'Students are strictly forbidden to adopt any unfair means in any test / exam. Any action taken by the authority should be accepted by the defaulters.',
        'Students should refrain themselves from any kind of detrimental and disgraceful act or behavior.'
    ]
    return (
        <>
            <Link href='/'>
                <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                    sx={{ m: 3 }}

                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
            </Link>
            <Container>
                <Typography style={{ textAlign: 'center' }} variant='h2' color='secondary'>
                    Rules & Regulation
                    </Typography>

                <Box>
                    <List>
                        {
                            rules.map(item => <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                       <p style={{color:'#02a650'}}>{rules.indexOf(item)+1}</p>
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>)
                        }
                        
                        
                    </List>
                </Box>
            </Container>
        </>
    );
};

export default Rules;