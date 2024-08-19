import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { uiContext } from '../../context/ui-context';
import { RiLinkedinFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import { FaWhatsapp } from "react-icons/fa";

const containerStyle = theme => ({
   paddingTop: '5rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '3rem',
   [theme.breakpoints.down('xl')]: {
      gap: '2.5rem',
      paddingTop: '4rem'
   },
   [theme.breakpoints.down('lg')]: {
      paddingTop: '3.5rem',
      gap: '2.25rem'
   },
   [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
   },
   [theme.breakpoints.down(350)]: {
      paddingTop: '3rem',
      textAlign: 'center'
   }
});

const iconContainerStyle = theme => ({
   display: 'flex',
   alignItems: 'flex-start',
   gap: '3rem',
   [theme.breakpoints.down('lg')]: {
      gap: '2.5rem'
   }
});

const iconBtnStyle = theme => ({
   color: 'text.white',
   minHeight: 0,
   border: '1px solid transparent',
   borderColor: 'text.white',
   background: 'transparent',
   minWidth: 0,
   transition: '300ms ease',
   [theme.breakpoints.down('xl')]: {
      padding: '6px'
   }
});

const navLinksContainerStyle = theme => ({
   display: 'flex',
   alignItems: 'flex-start',
   gap: '5rem',
   [theme.breakpoints.down('xl')]: {
      gap: '4rem'
   },
   [theme.breakpoints.down('lg')]: {
      gap: '3.5rem'
   },
   [theme.breakpoints.down('md')]: {
      gap: '2.25rem'
   },
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
   }
});

const navLinkStyle = theme => ({
   fontWeight: 500,
   fontSize: '14px',
   color: 'text.white',
   textTransform: 'uppercase',
   transition: '0.3s',
   '&:hover': {
      color: '#f8f6fe'
   },
   [theme.breakpoints.down('xl')]: {
      fontSize: '13px'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '12px'
   }
});

const mainTextStyle = theme => ({
   fontWeight: 600,
   fontFamily: 'primary.font',
   color: 'text.white',
   fontSize: '5rem',
   lineHeight: 1.2,
   textAlign: 'center',
   letterSpacing: '2px',
   [theme.breakpoints.down('xl')]: {
      fontSize: '3.5rem'
   },
   [theme.breakpoints.down('lg')]: {
      fontSize: '3rem'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '2.25rem'
   }
});

const copyrightStyle = theme => ({
   color: 'text.white',
   padding: '1.5rem',
   borderTop: '1px dashed transparent',
   width: '100%',
   borderColor: 'primary.main',
   textAlign: 'center',
   marginTop: '4rem',
   [theme.breakpoints.down('xl')]: {
      marginTop: '3.5rem',
      fontSize: '14px',
      padding: '1.25rem'
   },
   [theme.breakpoints.down('lg')]: {
      marginTop: '3rem'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '13px'
   }
});

const socialIcons = [
   {
      icon: <RiLinkedinFill style={{ fontSize: '1.25rem' }} />,
      link: 'https://www.linkedin.com/in/samimmiddey'
   },
   {
      icon: <RiGithubFill style={{ fontSize: '1.25rem' }} />,
      link: 'https://github.com/samimmiddey'
   },
   {
      icon: <FaWhatsapp style={{ fontSize: '1.25rem' }} />,
      link: 'https://wa.me/919051461078'
   }
];

const navLinks = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];

const Footer = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <div className={darkMode ? 'primary-background-dark' : 'footer-bg'}>
         <Box className='container' sx={containerStyle}>
            <Typography variant='h6' sx={mainTextStyle}>Samim Middey</Typography>
            <Box sx={navLinksContainerStyle}>
               {
                  navLinks.map((item, index) => (
                     <a href={`#${item.toLowerCase()}`} key={index}>
                        <Typography sx={navLinkStyle}>{item}</Typography>
                     </a>
                  ))
               }
            </Box>
            <Box sx={iconContainerStyle}>
               {
                  socialIcons.map((item, index) => (
                     <a
                        href={item.link}
                        target='_blank'
                        rel="noreferrer"
                        key={index}
                     >
                        <IconButton variant='contained' sx={iconBtnStyle}>{item.icon}</IconButton>
                     </a>
                  ))
               }
            </Box>
         </Box>
         <Typography sx={copyrightStyle}>&copy; Copyright 2024. All Rights Reserved.</Typography>
      </div>
   );
};

export default Footer;