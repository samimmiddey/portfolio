import React, { useEffect, useRef, useContext } from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import scss from '../../assets/skills/scss.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import node from '../../assets/skills/node.png';
import figma from '../../assets/skills/figma.png';
import firebase from '../../assets/skills/firebase.png';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PrimaryButton from '../UI/PrimaryButton';
import WorkIcon from '@mui/icons-material/Work';
import { uiContext } from '../context/ui-context';
import ObserverHook from '../../hooks/ObserverHook';

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
      icon: redux,
      text: 'Redux'
   },
   {
      icon: mui,
      text: 'Material UI'
   },
   {
      icon: node,
      text: 'NodeJS'
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
   },
   {
      icon: firebase,
      text: 'Firebase'
   }
];

const colors = ['251, 232, 206', '222, 247, 254', '250, 244, 183', '254, 227, 236', '228, 251, 255', '246, 229, 245', '214, 229, 250', '230, 248, 249', '246, 223, 235', '255, 223, 211', '244, 243, 243', '255, 247, 188'];

const skillsText = [
   "I work with modern technologies such as HTML5, CSS3, SCSS, JavaScript, Material UI, React JS, Redux, Redux Toolkit, Framer Motion, Node JS, Git, Firebase, Figma etc.",
   "I have a good sense of aesthetics and experience in responsive web design. I put special efforts into optimizing the code and make use of all the best use cases for all the technologies that I use. Because providing the best user experience possible is the ultimate goal."
];

const Skills = () => {
   const { setNavlink, darkMode } = useContext(uiContext);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   const ref = useRef();
   const isVisible = ObserverHook(ref);

   useEffect(() => {
      if (isVisible) {
         setNavlink('skills');
      }
   }, [isVisible, setNavlink]);

   return (
      <Box
         ref={ref}
         id='skills'
         className='container'
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '15rem',
            paddingTop: '8rem',
            paddingBottom: '8rem',
            [theme.breakpoints.down('xl')]: {
               paddingTop: '7rem',
               paddingBottom: '7rem',
               columnGap: '8rem'
            },
            [theme.breakpoints.down('lg')]: {
               paddingTop: '6rem',
               paddingBottom: '6rem',
               columnGap: '5rem'
            },
            [theme.breakpoints.down('md')]: {
               paddingTop: '5rem',
               paddingBottom: '5rem',
               columnGap: '3rem'
            },
            [theme.breakpoints.down('sm')]: {
               paddingTop: '4.5rem',
               paddingBottom: '4.5rem',
               gridTemplateColumns: 'none',
               grid: 'row',
               columnGap: 0,
               rowGap: '3rem'
            }
         })}
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
                  component={motion.h3}
                  initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
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
               <motion.div
                  initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <Box
                     sx={{
                        height: '4px',
                        width: '65%',
                        backgroundColor: darkMode ? '#5442af' : '#784cfb',
                        marginTop: '12px',
                        borderRadius: '10px'
                     }}
                  />
               </motion.div>
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
                     component={motion.h3}
                     initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     viewport={{ once: true }}
                     key={index}
                     sx={theme => ({
                        color: 'text.secondary',
                        fontWeight: 500,
                        fontSize: '16px',
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
            <motion.div
               initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 2, ease: 'easeInOut' }}
               viewport={{ once: true }}
            >
               <a href='#contact'>
                  <PrimaryButton
                     text='Hire Me'
                     height={height}
                     icon={<WorkIcon sx={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
                  />
               </a>
            </motion.div>
         </Box>
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
                  <motion.div
                     initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     viewport={{ once: true }}
                     style={{
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
                           backgroundColor: darkMode ? `rgba(${colors[index]}, 0.25)` : `rgba(${colors[index]}, 1)`,
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
                  </motion.div>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Skills;