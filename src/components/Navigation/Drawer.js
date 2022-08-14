import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton, List, ListItemButton, styled, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { uiContext } from '../context/ui-context';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const navigation = [
   {
      text: 'HOME',
      icon: HomeOutlinedIcon
   },
   {
      text: 'ABOUT',
      icon: AccountCircleOutlinedIcon
   },
   {
      text: 'SKILLS',
      icon: SettingsOutlinedIcon
   },
   {
      text: 'SERVICES',
      icon: HomeRepairServiceIcon
   },
   {
      text: 'PORTFOLIO',
      icon: VisibilityOutlinedIcon
   },
   {
      text: 'CONTACT',
      icon: PersonOutlineOutlinedIcon
   }
];

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   padding: '1rem 1rem 0px 2rem',
   ...theme.mixins.toolbar,
   justifyContent: 'space-between',
   [theme.breakpoints.down('sm')]: {
      padding: '10px 1rem 0px 1rem',
   }
}));

const CustomizedDrawer = () => {
   const [active, setActive] = useState(0);
   const { showDrawer, toggleDrawer, darkMode } = useContext(uiContext);

   return (
      <Box>
         <Drawer
            anchor={'right'}
            open={showDrawer}
            onClose={() => toggleDrawer()}
            sx={{
               zIndex: 999999
            }}
         >
            <Box
               sx={theme => ({
                  width: '300px',
                  backgroundColor: darkMode && '#191627',
                  height: '100%',
                  [theme.breakpoints.down('sm')]: {
                     width: '240px'
                  }
               })}
            >
               <DrawerHeader>
                  <Typography
                     variant='h6'
                     sx={{
                        color: darkMode ? '#8d85b9' : '#784cfb',
                        fontWeight: 700
                     }}
                  >
                     SM
                  </Typography>
                  <IconButton
                     onClick={() => toggleDrawer()}
                     size='small'
                     sx={{
                        "&:hover": {
                           backgroundColor: darkMode ? '#bcbac4' : "#ece6fe"
                        }
                     }}
                  >
                     <ChevronRightIcon
                        sx={{
                           color: darkMode ? '#8d85b9' : '#784cfb',
                           '&:hover': {
                              color: darkMode ? '#5442af' : '#784cfb'
                           }
                        }}
                     />
                  </IconButton>
               </DrawerHeader>
               {/* Navlist */}
               <Box>
                  <List
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '1rem'
                     }}
                  >
                     {navigation.map((item, index) => (
                        <a
                           href={`#${item.text.toLowerCase()}`}
                           key={index}
                           onClick={() => setActive(index)}
                        >
                           <ListItemButton
                              onClick={() => toggleDrawer()}
                              onKeyDown={() => toggleDrawer()}
                              className='nav-list'
                              sx={theme => ({
                                 display: 'flex',
                                 alignItems: 'center',
                                 padding: '1rem 2rem',
                                 columnGap: '2rem',
                                 backgroundColor: ((index === active && !darkMode) && '#ece6fe') ||
                                    ((index === active && darkMode) && '#8d85b9'),
                                 [theme.breakpoints.down('sm')]: {
                                    padding: '1rem 1.5rem',
                                    columnGap: '1.5rem'
                                 },
                                 "& > *": {
                                    color: index === active && !darkMode ? '#784cfb' :
                                       index === active && darkMode ? '#5442af' :
                                          'text.secondary',
                                 },
                                 "&:hover": {
                                    backgroundColor: darkMode ? '#c2beda' : "#ece6fe"
                                 }
                              })}
                           >
                              <item.icon />
                              <Typography
                                 sx={{
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    transition: '0.3s'
                                 }}
                              >
                                 {item.text}
                              </Typography>
                           </ListItemButton>
                        </a>
                     ))}
                  </List>
               </Box>
            </Box>
         </Drawer>
      </Box>
   );
}

export default CustomizedDrawer;