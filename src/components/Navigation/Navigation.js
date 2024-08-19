import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Navbar from './Navbar';
import CustomizedDrawer from './Drawer';
import { uiContext } from '../../context/ui-context';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { motion, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt4 } from 'react-icons/hi';
import { useCallback } from 'react';

const styles = {
   button: {
      width: 34, height: 34,
      padding: 0
   }
};

const containerStyle = theme => ({
   position: 'fixed',
   height: '70px',
   top: '1rem',
   left: 0,
   right: 0,
   transition: '300ms ease',
   zIndex: 9999,
   [theme.breakpoints.down('xl')]: {
      height: '60px'
   }
});

const innerContainerStyle = theme => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   height: '100%',
   width: '100%',
   borderRadius: '50px',
   boxShadow: '0 2px 15px -2px rgba(120, 76, 251, 0.25)',
   transition: '300ms ease',
   padding: '0 1.5rem',
   position: 'relative',
   overflow: 'hidden',
   [theme.breakpoints.down('xl')]: {
      padding: '0 1.5rem'
   },
   [theme.breakpoints.down('sm')]: {
      padding: '0 1rem'
   }
});

const iconContainerStyle = theme => ({
   display: 'flex',
   alignItems: 'center',
   gap: '2rem',
   [theme.breakpoints.down('md')]: {
      gap: '1.5rem'
   }
});

const Navigation = () => {
   const [activeNav, setActiveNav] = useState('');
   const { toggleDrawer, darkMode, toggleDarkmode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const handleScroll = useCallback(() => {
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('.navbar-link');

      if (window.scrollY > 50) {
         setActiveNav(true);
      } else {
         setActiveNav(false);
      }

      let current = '';

      sections.forEach((section) => {
         const sectionTop = section.offsetTop;
         if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
         }
      });

      navLinks.forEach((link, index) => {
         if (darkMode) {
            link.classList.remove('active-dark');
            if (sections[index].id === current) {
               link.classList.add('active-dark');
            }
         } else {
            link.classList.remove('active');
            if (sections[index].id === current) {
               link.classList.add('active');
            }
         }
      });
   }, [darkMode]);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [handleScroll]);

   const navigationClass = activeNav && darkMode ? 'nav-glass-dark' :
      activeNav && !darkMode ? 'nav-glass' : '';

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress.lastUpdated > 0 ? scrollYProgress : 0, {
      stiffness: 150,
      damping: 30,
      restDelta: 0.001
   });

   return (
      <>
         <Box sx={containerStyle}>
            <div className='nav-container' style={{ height: '100%' }}>
               <Box className={navigationClass} sx={innerContainerStyle}>
                  <a href="#home">
                     <Typography
                        variant='h6'
                        sx={theme => ({
                           color: 'primary.main',
                           fontWeight: 700,
                           fontFamily: 'primary.font',
                           fontSize: '1.75rem',
                           [theme.breakpoints.down('xl')]: {
                              fontSize: '1.5rem'
                           }
                        })}
                     >
                        SM
                     </Typography>
                  </a>
                  {
                     !mdWidth &&
                     <Navbar />
                  }
                  {
                     mdWidth &&
                     <Box sx={iconContainerStyle}>
                        {
                           !darkMode &&
                           <MdOutlineDarkMode
                              onClick={() => {
                                 localStorage.setItem('darkMode', true);
                                 toggleDarkmode();
                              }}
                              style={{
                                 color: darkMode ? '#8d85b9' : '#868395',
                                 transition: '300ms ease',
                                 fontSize: '1.7rem',
                                 cursor: 'pointer',
                                 '&:hover': {
                                    color: darkMode ? '#8d85b9' : '#784cfb'
                                 }
                              }}
                           />
                        }
                        {
                           darkMode &&
                           <MdOutlineLightMode
                              onClick={() => {
                                 localStorage.removeItem('darkMode');
                                 toggleDarkmode();
                              }}
                              style={{
                                 color: darkMode ? '#8d85b9' : '#868395',
                                 transition: '300ms ease',
                                 fontSize: '1.7rem',
                                 cursor: 'pointer',
                                 '&:hover': {
                                    color: darkMode ? '#8d85b9' : '#784cfb'
                                 }
                              }}
                           />
                        }
                        <IconButton
                           style={styles.button}
                           onClick={() => toggleDrawer()}
                           sx={{
                              backgroundColor: darkMode ? '#8d85b9' : '#784cfb',
                              color: darkMode ? '#5442af' : '#fff',
                              "&:hover": {
                                 backgroundColor: darkMode ? '#bcbac4' : "#ece6fe",
                                 color: darkMode ? '#5442af' : '#784cfb'
                              }
                           }}
                        >
                           <HiMenuAlt4 style={{ fontSize: '1.5rem' }} />
                        </IconButton>
                     </Box>
                  }
                  <motion.div className={darkMode ? 'progress-bar-dark' : 'progress-bar'} style={{ scaleX }} />
               </Box>
            </div>
            {
               mdWidth && <CustomizedDrawer />
            }
         </Box>
      </>
   );
};

export default Navigation;