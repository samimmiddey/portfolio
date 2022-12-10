import React, { useContext } from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import scss from '../../assets/skills/scss.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import figma from '../../assets/skills/figma.png';
import firebase from '../../assets/skills/firebase.png';
import tailwind from '../../assets/skills/tailwind.png';
import context from '../../assets/skills/context.png';
import sanity from '../../assets/skills/sanity.png';
import framer from '../../assets/skills/framer.png';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PrimaryButton from '../UI/PrimaryButton';
import WorkIcon from '@mui/icons-material/Work';
import { uiContext } from '../context/ui-context';
import { SiNextdotjs } from 'react-icons/si';

const Skills = () => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const icons = [
      {
         icon: html,
         text: 'HTML5'
      },
      {
         icon: css,
         text: 'CSS3'
      },
      {
         icon: js,
         text: 'JavaScript'
      },
      {
         icon: scss,
         text: 'SCSS'
      },
      {
         icon: react,
         text: 'ReactJS'
      },
      {
         icon: <SiNextdotjs
            style={{
               fontSize: xlWidth && !lgWidth && !mdWidth && !smWidth ? '2.4rem' :
                  xlWidth && lgWidth && !mdWidth && !smWidth ? '2.2rem' :
                     xlWidth && lgWidth && mdWidth && !smWidth ? '1.7rem' :
                        xlWidth && lgWidth && mdWidth && smWidth ? '1.6rem' : '2.65rem',
               color: '#0099cc'
            }}
         />,
         text: 'NextJS'
      },
      {
         icon: context,
         text: 'ContextAPI'
      },
      {
         icon: redux,
         text: 'Redux'
      },
      {
         icon: mui,
         text: 'Material UI'
      },
      {
         icon: tailwind,
         text: 'TailwindCSS'
      },
      {
         icon: firebase,
         text: 'Firebase'
      },
      {
         icon: sanity,
         text: 'Sanity'
      },
      {
         icon: framer,
         text: 'Framer Motion'
      },
      {
         icon: figma,
         text: 'Figma'
      },
      {
         icon: git,
         text: 'Git'
      },
      {
         icon: github,
         text: 'Github'
      }
   ];

   const colors = ['#ff9900', '#3399ff', '#cccc00', '#ff6699', '#33bbff', '#0099cc', '#53C1DE', '#9933ff', '#3399ff', '#00ccff', '#e6b800', '#ff471a', '#4d88ff', '#cc6699', '#ff6600', '#006699'];

   const skillsText = [
      "I work with all the modern technologies such as ReactJS, NextJS, Redux, Material UI, Tailwind etc. I have a good sense of aesthetics and experience in responsive web design. I put special efforts into optimizing the code and make use of all the best use cases for all the technologies that I use.",
      "I put a lot of thoughts into designing and consider all the possible hurdles before coming up with a solution which is not only visually stunning, but also functional as per requirement. Because providing the best user experience possible is the ultimate goal!"
   ];

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   return (
      <Box
         id='skills'
         className='container section-padding section'
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '10rem',
            [theme.breakpoints.down('xl')]: {
               columnGap: '8rem'
            },
            [theme.breakpoints.down('lg')]: {
               columnGap: '5rem'
            },
            [theme.breakpoints.down('md')]: {
               columnGap: '2rem'
            },
            [theme.breakpoints.down('sm')]: {
               gridTemplateColumns: 'none',
               grid: 'row',
               columnGap: 0,
               rowGap: '3rem'
            }
         })}
      >
         <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
         >
            <Box
               sx={theme => ({
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  rowGap: '2rem',
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.5rem'
                  }
               })}
            >
               <Box>
                  <Typography
                     variant='h3'
                     sx={theme => ({
                        fontWeight: 500,
                        fontFamily: 'Abril Fatface',
                        color: 'text.primary',
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
                     My Skills
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
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '1rem',
                     marginBottom: '10px'
                  }}
               >
                  {skillsText.map((text, index) => (
                     <Typography
                        key={index}
                        sx={theme => ({
                           color: 'text.secondary',
                           fontWeight: 500,
                           fontSize: '16px',
                           lineHeight: '1.6',
                           [theme.breakpoints.down('lg')]: {
                              fontSize: '15px'
                           },
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '14px'
                           }
                        })}
                     >
                        {text}
                     </Typography>
                  ))}
               </Box>
               <a href='#contact'>
                  <PrimaryButton
                     text='Hire Me'
                     height={height}
                     icon={<WorkIcon sx={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
                  />
               </a>
            </Box>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <Grid
               container
               rowGap={smWidth ? 6 : 7}
               sx={{
                  margin: '0 auto'
               }}
            >
               {icons.map((item, index) => (
                  <Grid
                     item
                     key={index}
                     xs={3}
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >
                        <Box
                           className={darkMode ? 'skills-circle-dark' : 'skills-circle'}
                           sx={theme => ({
                              height: '100px',
                              width: '100px',
                              borderRadius: '50%',
                              backgroundColor: `${colors[index]}25`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: '300ms ease',
                              [theme.breakpoints.down('xl')]: {
                                 height: '80px',
                                 width: '80px'
                              },
                              [theme.breakpoints.down('lg')]: {
                                 height: '70px',
                                 width: '70px'
                              },
                              [theme.breakpoints.down('md')]: {
                                 height: '50px',
                                 width: '50px'
                              }
                           })}
                        >
                           {item.text === 'NextJS' && item.icon}
                           {item.text !== 'NextJS' &&
                              <img
                                 style={{
                                    height: xlWidth && !lgWidth && !mdWidth ? '40px' :
                                       xlWidth && lgWidth && !mdWidth ? '35px' :
                                          xlWidth && lgWidth && mdWidth ? '30px' : '50px',
                                    width: xlWidth && !lgWidth && !mdWidth ? '40px' :
                                       xlWidth && lgWidth && !mdWidth ? '35px' :
                                          xlWidth && lgWidth && mdWidth ? '30px' : '50px'
                                 }}
                                 src={item.icon}
                                 alt=""
                              />
                           }
                        </Box>
                        <Typography
                           sx={theme => ({
                              textAlign: 'center',
                              mt: 1.5,
                              color: 'text.secondary',
                              fontWeight: 500,
                              fontSize: '14px',
                              [theme.breakpoints.down('lg')]: {
                                 fontSize: '13.5px'
                              },
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '13px'
                              }
                           })}
                        >
                           {item.text}
                        </Typography>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </motion.div>
      </Box>
   );
};

export default Skills;