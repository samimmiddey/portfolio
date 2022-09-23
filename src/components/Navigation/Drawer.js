import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton, List, ListItemButton, styled, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { uiContext } from '../context/ui-context';
import { MdOutlinePersonPin } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { BiHomeAlt, BiBriefcaseAlt2 } from 'react-icons/bi';
import { RiSettings2Line } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';

const navigation = [
   {
      text: 'HOME',
      icon: <BiHomeAlt style={{ fontSize: '1.35rem' }} />
   },
   {
      text: 'ABOUT',
      icon: <MdOutlinePersonPin style={{ fontSize: '1.35rem' }} />
   },
   {
      text: 'SKILLS',
      icon: <RiSettings2Line style={{ fontSize: '1.35rem' }} />
   },
   {
      text: 'SERVICES',
      icon: <BiBriefcaseAlt2 style={{ fontSize: '1.35rem' }} />
   },
   {
      text: 'PORTFOLIO',
      icon: <FiEye style={{ fontSize: '1.35rem' }} />
   },
   {
      text: 'CONTACT',
      icon: <TiContacts style={{ fontSize: '1.35rem' }} />
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
                        <ListItemButton
                           key={index}
                           onClick={() => {
                              setActive(index);
                              toggleDrawer();
                           }}
                           onKeyDown={() => toggleDrawer()}
                           className='nav-list'
                           sx={theme => ({
                              borderRadius: '10px',
                              margin: '0 12px',
                              padding: 0,
                              backgroundColor: ((index === active && !darkMode) && '#ece6fe') ||
                                 ((index === active && darkMode) && '#8d85b9'),
                              "& > *": {
                                 color: index === active && !darkMode ? '#784cfb' :
                                    index === active && darkMode ? '#5442af' :
                                       'text.secondary',
                              },
                              "&:hover": {
                                 backgroundColor: darkMode ? '#8d85b9' : "#ece6fe",
                                 "& > *": {
                                    color: darkMode ? '#5442af' : '#784cfb'
                                 }
                              }
                           })}
                        >
                           <a href={`#${item.text.toLowerCase()}`} style={{ height: '100%', width: '100%' }}>
                              <Box
                                 sx={theme => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '2rem',
                                    padding: '1.1rem 2rem',
                                    [theme.breakpoints.down('sm')]: {
                                       columnGap: '1.5rem',
                                       padding: '1.05rem 1.5rem'
                                    }
                                 })}
                              >
                                 {item.icon}
                                 <Typography
                                    sx={{
                                       fontSize: '13px',
                                       fontWeight: 600
                                    }}
                                 >
                                    {item.text}
                                 </Typography>
                              </Box>
                           </a>
                        </ListItemButton>
                     ))}
                  </List>
               </Box>
            </Box>
         </Drawer >
      </Box >
   );
}

export default CustomizedDrawer;