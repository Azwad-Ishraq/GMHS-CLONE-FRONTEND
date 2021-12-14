
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {  IconButton, SwipeableDrawer } from '@mui/material';
import Drawer from './Drawer/Drawer'
import Image from 'next/image'
import styles from  '../../styles/SideBar.module.css'
import SearchIcon from '@mui/icons-material/Search';

const SideBar = () => {
    // state for opening and closing drawer
    const [openDrawer,setOpenDrawer] = useState(false)
   





    return (
        <Box style={{width:'100%'}} sx={{ flexGrow: 1 }}>

        <AppBar className={styles.nav}  position="fixed">
          <Toolbar style={{display:'flex',justifyContent:'space-around',height:'100%',alignItems:'center'}}>
            <IconButton
              style={{position:'fixed',left:'30px',backgroundColor:'#02a650'}}
            
              size="large"
              edge="start"
              color='primary'
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={()=> setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            
          
          <div className={styles.appBarBody}>
            <div className={styles.inputBox}>
            <label for='search'><SearchIcon color='secondary'></SearchIcon></label>
            
            <input id="search" className={styles.searchInput} type="text" placeholder='Search'/>
            </div>
            </div>
              
          </Toolbar>
        </AppBar>
       <Box>
         <SwipeableDrawer
         
         anchor='left'
         open={openDrawer}
         onClose={()=> setOpenDrawer(false)}
         onOpen={()=> setOpenDrawer(true)}
         >
           <Drawer setOpenDrawer={setOpenDrawer}></Drawer>
         </SwipeableDrawer>
       </Box>
      </Box>
    );
};

export default SideBar;