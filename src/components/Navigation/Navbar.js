import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { uiContext } from '../context/ui-context';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const navigation = ['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

const Navbar = () => {
   const { navlinkID, setNavlink, darkMode, toggleDarkmode } = useContext(uiContext);

   return (
      <Box
         sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            columnGap: '3rem',
            [theme.breakpoints.down('xl')]: {
               columnGap: '2rem'
            },
            [theme.breakpoints.down('lg')]: {
               columnGap: '1.5rem'
            }
         })}
      >
         <List
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               columnGap: '3rem',
               [theme.breakpoints.down('xl')]: {
                  columnGap: '2rem'
               },
               [theme.breakpoints.down('lg')]: {
                  columnGap: '1.5rem'
               }
            })}
         >
            {navigation.map((item, index) => (
               <a
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  onClick={() => setNavlink(item.toLowerCase())}
               >
                  <ListItem
                     sx={{
                        borderRadius: '5px'
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: '13px',
                           fontWeight: 600,
                           color: navigation[index].toLowerCase() === navlinkID && !darkMode ? '#784cfb' :
                              navigation[index].toLowerCase() === navlinkID && darkMode ? '#8d85b9' :
                                 'text.secondary',
                           transition: '0.3s',
                           '&:hover': {
                              color: darkMode ? '#8d85b9' : '#784cfb'
                           }
                        }}
                     >
                        {item}
                     </Typography>
                  </ListItem>
               </a>
            ))}
         </List>
         {
            !darkMode &&
            <IconButton
               onClick={() => {
                  localStorage.setItem('darkMode', true);
                  toggleDarkmode();
               }}
               className='icon-button'
               size='medium'
               sx={{
                  backgroundColor: darkMode ? '#8d85b9' : '#784cfb',
                  "&:hover": {
                     backgroundColor: darkMode ? '#bcbac4' : "#ece6fe"
                  }
               }}
            >
               <DarkModeOutlinedIcon
                  sx={{
                     transition: '0.3s',
                     color: '#fff',
                     fontSize: '1.2rem',
                     '&:hover': {
                        color: '#784cfb'
                     }
                  }}
               />
            </IconButton>
         }
         {
            darkMode &&
            <IconButton
               onClick={() => {
                  localStorage.removeItem('darkMode');
                  toggleDarkmode();
               }}
               className='icon-button'
               size='medium'
               sx={{
                  backgroundColor: darkMode ? '#8d85b9' : '#784cfb',
                  "&:hover": {
                     backgroundColor: darkMode ? '#bcbac4' : "#ece6fe"
                  }
               }}
            >
               <LightModeOutlinedIcon
                  sx={{
                     transition: '0.3s',
                     color: darkMode ? '#5442af' : '#fff',
                     fontSize: '1.2rem',
                     '&:hover': {
                        color: darkMode ? '#5442af' : '#784cfb'
                     }
                  }}
               />
            </IconButton>
         }
      </Box>
   );
};

export default Navbar;