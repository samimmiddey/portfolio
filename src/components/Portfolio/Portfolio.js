import React, { useState, useContext } from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import shopcultlight from '../../assets/projects/shopcultlight.svg';
import shopcultdark from '../../assets/projects/shopcultdark.svg';
import shopflinglight from '../../assets/projects/shopflinglight.svg';
import shopflingdark from '../../assets/projects/shopflingdark.svg';
import youtubelight from '../../assets/projects/youtubelight.svg';
import youtubedark from '../../assets/projects/youtubedark.svg';
import hoobanklight from '../../assets/projects/hoobanklight.svg';
import hoobankdark from '../../assets/projects/hoobankdark.svg';
import portfoliolight from '../../assets/projects/portfoliolight.svg';
import portfoliodark from '../../assets/projects/portfoliodark.svg';
import plantexlight from '../../assets/projects/plantexlight.svg';
import plantexdark from '../../assets/projects/plantexdark.svg';
import PortfolioCard from '../UI/PortfolioCard';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';

const buttonText = ['All', 'UI/UX', 'Front End', 'Full Stack'];

const projects = [
   {
      img: shopcultlight,
      imgDark: shopcultdark,
      title: 'Shopcult',
      categories: ['FULL STACK', 'ALL'],
      description: 'A modern ecommerce website built using ReactJS, Redux Toolkit, Material UI, CommerceJS, Firebase, Stripe, SwiperJS & much more!',
      demo: 'https://shopcult.netlify.app',
      git: 'https://github.com/samimmiddey/shopcult'
   },
   {
      img: shopflinglight,
      imgDark: shopflingdark,
      title: 'Shopfling',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A modern React dashboard built using ReactJS, ContextAPI, Material UI, Syncfusion Components with dark mode, theming & much more!',
      demo: 'https://shopfling.netlify.app',
      git: 'https://github.com/samimmiddey/shopfling'
   },
   {
      img: youtubelight,
      imgDark: youtubedark,
      title: 'YouTube 2.0',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A YouTube replica application built using NextJS, ContextAPI, Material UI with features such as dark mode, searching ability & much more!',
      demo: 'https://youtubereplica.vercel.app',
      git: 'https://github.com/samimmiddey/youtubereplica'
   },
   {
      img: hoobanklight,
      imgDark: hoobankdark,
      title: 'Hoobank',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A modern responsive landing page of a banking website with cool animation, created with ReactJS, TailwindCSS & Framer Motion!',
      demo: 'https://hoobankofficial.netlify.app',
      git: 'https://github.com/samimmiddey/hoobank'
   },
   {
      img: portfoliolight,
      imgDark: portfoliodark,
      title: 'Personal Portfolio',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A modern personal portfolio built using ReactJS, ContextAPI, Material UI, Framer Motion, Leaflet, EmailJS, SwiperJS & much more!',
      demo: 'https://samimmiddey.netlify.app',
      git: 'https://github.com/samimmiddey/portfolio'
   },
   {
      img: plantexlight,
      imgDark: plantexdark,
      title: 'Plantex',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A modern responsive landing page with cool JavaScript animation, created with plain HTML, CSS, JavaScript & Scrollreveal!',
      demo: 'https://plantexdesign.netlify.app',
      git: 'https://github.com/samimmiddey/Plantex'
   },
];

const Portfolio = () => {
   const { darkMode } = useContext(uiContext);

   const [category, setCategory] = useState({
      value: 'all',
      index: 0
   });
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

   const filteredProjects = projects.filter((project) => project.categories.includes(category.value.toUpperCase()));

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box
         id='portfolio'
         className='container section-padding section'
         sx={theme => ({
            display: 'flex',
            flexDirection: 'column',
            rowGap: '3rem',
            [theme.breakpoints.down('xl')]: {
               rowGap: '2.75rem'
            },
            [theme.breakpoints.down('lg')]: {
               rowGap: '2.5rem'
            },
            [theme.breakpoints.down('md')]: {
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