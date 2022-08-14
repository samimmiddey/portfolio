import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import dashboard from '../../assets/projects/dashboard.svg';
import dashboardDark from '../../assets/projects/dashboardDark.svg';
import ecommerce from '../../assets/projects/ecommerce.svg';
import ecommerceDark from '../../assets/projects/ecommerceDark.svg';
import plantex from '../../assets/projects/plantex.svg';
import plantexDark from '../../assets/projects/plantexDark.svg';
import PortfolioCard from '../UI/PortfolioCard';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';
import ObserverHook from '../../hooks/ObserverHook';

const buttonText = ['All', 'UI/UX', 'React JS', 'Web App'];

const projects = [
   {
      img: ecommerce,
      imgDark: ecommerceDark,
      title: 'Shopcult',
      categories: ['REACT JS', 'ALL'],
      description: 'A modern ecommerce website built using React JS, Redux Toolkit, Material UI, Commerce JS, Firebase & much more!',
      demo: 'https://shopcult.netlify.app',
      git: 'https://github.com/samimmiddey/shopcult'
   },
   {
      img: dashboard,
      imgDark: dashboardDark,
      title: 'Admin Dashboard',
      categories: ['REACT JS', 'ALL', 'UI/UX'],
      description: 'A modern admin dashboard built using React JS, Redux Toolkit, Material UI, Firebase Authentication, Recharts & much more!',
      demo: 'https://myreactadminpanel.netlify.app',
      git: 'https://github.com/samimmiddey/react-admin'
   },
   {
      img: plantex,
      imgDark: plantexDark,
      title: 'Plantex',
      categories: ['REACT JS', 'ALL', 'UI/UX'],
      description: 'A modern single page static website with cool javascript animation, created with plain HTML, CSS, Javascript & Scrollreveal!',
      demo: 'https://plantex-site.netlify.app',
      git: 'https://github.com/samimmiddey/Plantex'
   },
   {
      img: dashboard,
      imgDark: dashboardDark,
      title: 'Admin Dashboard',
      categories: ['REACT JS', 'ALL', 'UI/UX'],
      description: 'A modern admin dashboard built using React JS, Redux Toolkit, Material UI, Firebase Authentication, Recharts & much more!',
      demo: 'https://myreactadminpanel.netlify.app',
      git: 'https://github.com/samimmiddey/react-admin'
   },
];

const parent = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2
      }
   }
}

const children = {
   hidden: {
      opacity: 0,
      y: -100
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 2,
         ease: [0.6, 0.01, -0.05, 0.95]
      }
   }
}

const Portfolio = () => {
   const { setNavlink, darkMode } = useContext(uiContext);

   const [category, setCategory] = useState({
      value: 'all',
      index: 0
   });
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

   const filteredProjects = projects.filter((project) => project.categories.includes(category.value.toUpperCase()));

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const ref = useRef();
   const isVisible = ObserverHook(ref);

   useEffect(() => {
      if (isVisible) {
         setNavlink('portfolio');
      }
   }, [isVisible, setNavlink]);

   return (
      <Box
         ref={ref}
         id='portfolio'
         className='container'
         sx={theme => ({
            paddingTop: '8rem',
            paddingBottom: '8rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '3rem',
            [theme.breakpoints.down('xl')]: {
               paddingTop: '7rem',
               paddingBottom: '7rem',
               rowGap: '2.75rem'
            },
            [theme.breakpoints.down('lg')]: {
               paddingTop: '6rem',
               paddingBottom: '6rem',
               rowGap: '2.5rem'
            },
            [theme.breakpoints.down('md')]: {
               paddingTop: '5rem',
               paddingBottom: '5rem',
               rowGap: '2.25rem'
            },
            [theme.breakpoints.down('sm')]: {
               padding: '4.5rem 1rem',
               rowGap: '2rem'
            }
         })}
      >
         <Box
            sx={theme => ({
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               rowGap: '2rem',
               [theme.breakpoints.down('md')]: {
                  rowGap: '1.5rem'
               },
               [theme.breakpoints.down('sm')]: {
                  rowGap: '1rem'
               }
            })}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Typography
                  variant='h3'
                  component={motion.h3}
                  initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  sx={theme => ({
                     fontWeight: 500,
                     color: 'text.primary',
                     fontFamily: 'Abril Fatface',
                     letterSpacing: 1,
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '2.5rem'
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '2rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '1.75rem'
                     }
                  })}
               >
                  Portfolio
               </Typography>
               <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  sx={{
                     height: '4px',
                     width: '65%',
                     backgroundColor: darkMode ? '#5442af' : '#784cfb',
                     marginTop: '12px',
                     borderRadius: '10px'
                  }}
               />
            </Box>
            <Box>
               <Typography
                  component={motion.h6}
                  initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  sx={theme => ({
                     color: 'text.secondary',
                     fontWeight: 500,
                     textAlign: 'center',
                     fontSize: '16px',
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '15px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                     }
                  })}
               >
                  All of my latest work created with modern technologies
               </Typography>
            </Box>
         </Box>
         <Box
            component={motion.div}
            variants={parent}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            sx={{
               display: 'flex',
               justifyContent: 'center',
               columnGap: '1rem',
               flexWrap: 'wrap',
               rowGap: '1rem'
            }}
         >
            {buttonText.map((text, index) => (
               <Button
                  component={motion.button}
                  variants={children}
                  viewport={{ once: true }}
                  onClick={() => {
                     setAnimateCard([{ y: 100, opacity: 0 }]);
                     setTimeout(() => {
                        setAnimateCard([{ y: 0, opacity: 1 }]);
                        setCategory({ value: text, index: index });
                     }, 500);
                  }}
                  size={smWidth ? 'small' : 'medium'}
                  key={index}
                  variant='contained'
                  disableElevation
                  sx={{
                     textTransform: 'none',
                     color: darkMode ? 'text.primary' : '#fff',
                     backgroundColor: category.index === index && !darkMode ? 'rgb(120, 76, 251)' :
                        category.index === index && darkMode ? 'rgb(84, 66, 175)' :
                           category.index !== index && darkMode ? '#2d235c' :
                              'rgba(120, 76, 251, 0.75)',
                     '&:hover': {
                        background: ((category.index !== index && !darkMode) && 'rgba(120, 76, 251, 0.75)') ||
                           ((category.index !== index && darkMode) && '#2d235c')
                     }
                  }}
               >
                  {text}
               </Button>
            ))}
         </Box>
         <Grid
            component={motion.div}
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5, ease: 'easeInOut' }}
            container
            sx={theme => ({
               width: '95%',
               margin: '0 auto',
               justifyContent: 'center',
               [theme.breakpoints.down('lg')]: {
                  width: '100%'
               },
               [theme.breakpoints.down('sm')]: {
                  width: '70%'
               },
               [theme.breakpoints.down(500)]: {
                  width: '90%'
               },
               [theme.breakpoints.down(350)]: {
                  width: '100%'
               }
            })}
         >
            {filteredProjects.map((project, index) => (
               <Grid
                  item
                  key={index}
                  xs={12} xm={12} sm={6} md={4} lg={3} xl={3}
                  sx={theme => ({
                     display: 'flex',
                     justifyContent: 'center',
                     padding: '1rem 10px',
                     [theme.breakpoints.down('lg')]: {
                        padding: '10px'
                     }
                  })}
               >
                  <PortfolioCard
                     key={index}
                     details={project}
                  />
               </Grid>
            ))}
         </Grid>
      </Box >
   );
};

export default Portfolio;