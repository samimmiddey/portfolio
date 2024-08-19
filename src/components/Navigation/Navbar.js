import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { uiContext } from '../../context/ui-context';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const navigation = ['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

const containerStyle = theme => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: '3rem',
   [theme.breakpoints.down('xl')]: {
      columnGap: '2rem'
   },
   [theme.breakpoints.down('lg')]: {
      columnGap: '1.5rem'
   }
});

const listStyle = theme => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: '2.5rem',
   [theme.breakpoints.down('xl')]: {
      columnGap: '1.75rem'
   },
   [theme.breakpoints.down('lg')]: {
      columnGap: '1.5rem'
   }
});

const lightModeIconStyle = {
   transition: '0.3s ease',
   color: '#5442af',
   fontSize: '1.2rem',
   '&:hover': {
      color: '#5442af'
   }
};

const darkModeIconStyle = {
   transition: '0.3s ease',
   color: '#fff',
   fontSize: '1.2rem',
   '&:hover': {
      color: '#fff'
   }
};

const navLinkStyle = theme => ({
   fontSize: '14px',
   fontWeight: 600,
   transition: '300ms ease',
   '&:hover': {
      color: 'primary.main'
   },
   [theme.breakpoints.down('xl')]: {
      fontSize: '11px'
   }
});

const Navbar = () => {
   const { darkMode, toggleDarkmode } = useContext(uiContext);

   return (
      <>
         <List sx={listStyle}>
            {
               navigation.map((item, index) => (
                  <a href={`#${item.toLowerCase()}`} key={index}>
                     <ListItem
                        sx={{
                           borderRadius: '5px',
                           color: darkMode ? 'secondary.main' : 'text.primary'
                        }}
                     >
                        <Typography
                           className={`navbar-link ${index === 0 && (darkMode ? 'active-dark' : 'active')}`}
                           sx={navLinkStyle}
                        >
                           {item}
                        </Typography>
                     </ListItem>
                  </a>
               ))
            }
         </List>
         <Box sx={containerStyle}>
            <IconButton
               onClick={() => {
                  if (darkMode) {
                     localStorage.removeItem('darkMode');
                     toggleDarkmode();
                  } else {
                     localStorage.setItem('darkMode', true);
                     toggleDarkmode();
                  }
               }}
               className='icon-button'
               size='medium'
               sx={{
                  backgroundColor: 'secondary.main',
                  "&:hover": {
                     backgroundColor: 'secondary.main',
                  }
               }}
            >
               {
                  darkMode ? (
                     <MdOutlineLightMode style={lightModeIconStyle} />
                  ) : (
                     <MdOutlineDarkMode style={darkModeIconStyle} />
                  )
               }
            </IconButton>
         </Box>
      </>
   );
};

export default Navbar;