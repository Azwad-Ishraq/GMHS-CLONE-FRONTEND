import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TimelineIcon from '@mui/icons-material/Timeline';
import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CallIcon from '@mui/icons-material/Call';

const Drawer = ({ setOpenDrawer }) => {

    // state for opening and closing collapse list items
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div style={{ width: '300px', height: '100%' }}>

            <List
                style={{ position: 'relative', height: '100%', paddingBottom: '0' }}
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }} component="div" id="nested-list-subheader">
                        Menu
                        
                        <IconButton
                            size="large"
                            edge="start"
                            color="secondary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpenDrawer(false)}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </ListSubheader>
                }
            >
                <Link href='/'>
                    <ListItemButton >
                        <ListItemIcon>
                            <HomeIcon color='secondary'></HomeIcon>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>


                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <InfoIcon color='secondary'/>
                    </ListItemIcon>
                    <ListItemText primary="About" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={!open} timeout="auto" unmountOnExit>

                    <List component="div" disablePadding>

                        <Link href='/about/ourHistory'>
                            <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                <ListItemIcon>
                                    <TimelineIcon color='secondary' />
                                </ListItemIcon>
                                <ListItemText primary="Our History" />
                            </ListItemButton>
                        </Link>



                        <Link href='/about/result'>

                            <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                <ListItemIcon>
                                    <SubjectIcon color='secondary' />
                                </ListItemIcon>
                                <ListItemText primary="Board Exam Result" />
                            </ListItemButton>
                        </Link>

                        <Link href='/about/rules'>
                            <ListItemButton style={{ textAlign: 'left', paddingLeft: '25px' }}>
                                <ListItemIcon>
                                    <AssignmentTurnedInIcon color='secondary' />
                                </ListItemIcon>
                                <ListItemText primary="Rules and Regulations" />
                            </ListItemButton>
                        </Link>






                    </List>
                </Collapse>

                <Link href='/'>
                    <ListItemButton >
                        <ListItemIcon>
                           <SettingsIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary="Management" />
                    </ListItemButton>
                </Link>

                <Link href='/'>
                    <ListItemButton >
                        <ListItemIcon>
                            <SchoolIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary="Academic" />
                    </ListItemButton>
                </Link>

                <Link href='/'>
                    <ListItemButton >
                        <ListItemIcon>
                            <PersonAddAltIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary="Admission" />
                    </ListItemButton>
                </Link>

                <Link href='/'>
                    <ListItemButton >
                        <ListItemIcon>
                            <CallIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </Link>



            </List>
        </div>
    );
};

export default Drawer;