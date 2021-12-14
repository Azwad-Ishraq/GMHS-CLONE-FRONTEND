import { Container, Typography } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import styles from '../../styles/PinNotice.module.css'
const PinNotice = ({notices}) => {
    

    


    return (
        <Container style={{overflowX:'hidden'}} sx={{ mt: 5 }}>
            <Typography sx={{p:1}} style={{color:'#02a650'}} variant='h4'>
                Pin Notice
               
            </Typography>

            <List styles={{overflowX:'hidden'}} >

                {
                    notices.map(item =>
                        <>
                       <Link  href={`/notice/${item._id}`}>
                       <ListItem
                       sx={{ borderRadius: 3 }}
                       className={styles.listItem}
                        data-aos="fade-left"
                        
                         
                         >
                            <ListItemButton>
                                
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                       </Link>
                        {/* <Divider/> */}
                        </>
                    )
                }




            </List>
        </Container>
    );
};


export default PinNotice;







