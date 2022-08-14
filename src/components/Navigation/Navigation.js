import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import CustomizedDrawer from './Drawer';
import { uiContext } from '../context/ui-context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { motion, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt4 } from 'react-icons/hi';

const styles = {
   button: {
      width: 32, height: 32,
      padding: 0
   }
};

const Navigation = () => {
   const [navClass, setNavClass] = useState('');
   const { toggleDrawer, darkMode, toggleDarkmode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   useEffect(() => {
      window.onscroll = function () {
         if (window.scrollY > 50) {
            setNavClass('nav-glass');
         } else {
            setNavClass('');
         }
      };
   }, []);

   const navigationClass = navClass && darkMode ? 'nav-glass-dark' :
      navClass && !darkMode ? 'nav-glass' : '';

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 150,
      damping: 30,
      restDelta: 0.001
   });

   return (
      <>
         <Box
            className={navigationClass}
            sx={theme => ({
               position: 'fixed',
               height: '70px',
               top: 0,
               left: 0,
               // right: 0,
               width: '100vw',
               backgroundColor: (!navClass && !darkMode) && '#fff',
               zIndex: 9999,

               [theme.breakpoints.down('sm')]: {
                  height: '60px'
               }
            })}
         >
            <Box
               className='container'
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%'
               }}
            >
               <a href="#home">
                  <Typography
                     variant='h6'
                     sx={theme => ({
                        color: darkMode ? '#8d85b9' : '#784cfb',
                        fontWeight: 700,
                        fontFamily: 'Abril Fatface',
                        fontSize: '1.45rem',
                        [theme.breakpoints.down('md')]: {
                           fontSize: '1.35rem'
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
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '2rem'
                     }}
                  >
                     {
                        !darkMode &&
                        <DarkModeOutlinedIcon
                           onClick={() => {
                              localStorage.setItem('darkMode', true);
                              toggleDarkmode();
                           }}
                           sx={{
                              color: darkMode ? '#8d85b9' : 'text.secondary',
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
                        <LightModeOutlinedIcon
                           onClick={() => {
                              localStorage.removeItem('darkMode');
                              toggleDarkmode();
                           }}
                           sx={{
                              color: darkMode ? '#8d85b9' : 'text.secondary',
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
                        <HiMenuAlt4
                           style={{
                              fontSize: '1.4rem'
                           }}
                        />
                     </IconButton>
                  </Box>
               }
            </Box>
            {
               mdWidth &&
               <CustomizedDrawer />
            }
         </Box>
         <motion.div className={darkMode ? 'progress-bar-dark' : 'progress-bar'} style={{ scaleX }} />
      </>
   );
};

export default Navigation;