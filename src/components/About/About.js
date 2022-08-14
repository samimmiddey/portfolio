import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useContext } from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import PrimaryButton from '../UI/PrimaryButton';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import ObserverHook from '../../hooks/ObserverHook';
import { uiContext } from '../context/ui-context';
import { useEffect } from 'react';

const skills = [html, css, js, react, redux, mui];

const aboutText = [
   "I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.",
   "I'm quite confident, naturally curious and constantly working hard to be the better version of me every single day.",
   "If I had to describe myself in one sentence that would be family person, football fanatic & tech obsessed."

];

const About = () => {
   const { setNavlink, darkMode } = useContext(uiContext);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   const ref = useRef();
   const isVisible = ObserverHook(ref);

   useEffect(() => {
      if (isVisible) {
         setNavlink('about');
      }
   }, [isVisible, setNavlink]);

   return (
      <Box
         ref={ref}
         id='about'
         sx={{
            backgroundColor: darkMode ? '#211d35' : '#f8f6fe',
            overflowX: 'hidden'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               paddingTop: '8rem',
               paddingBottom: '8rem',
               display: 'grid',
               gridTemplateColumns: 'repeat(2, 1fr)',
               minHeight: '100px',
               [theme.breakpoints.down('xl')]: {
                  paddingTop: '7rem',
                  paddingBottom: '7rem'
               },
               [theme.breakpoints.down('lg')]: {
                  paddingTop: '6rem',
                  paddingBottom: '6rem',
               },
               [theme.breakpoints.down('md')]: {
                  paddingTop: '5rem',
                  paddingBottom: '5rem',
               },
               [theme.breakpoints.down('sm')]: {
                  paddingTop: '4.5rem',
                  paddingBottom: '4.5rem',
                  gridTemplateColumns: 'none',
                  gridTemplateRows: 'repeat(2, 1fr)'
               },
               [theme.breakpoints.down(500)]: {
                  paddingTop: '1rem',
                  paddingBottom: '4.5rem',
               },
               [theme.breakpoints.down(400)]: {
                  paddingTop: 0
               }
            })}
         >
            <motion.div
               initial={{ opacity: 0, x: mdWidth && !smWidth ? -50 : mdWidth && smWidth ? 50 : -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 2, ease: 'easeInOut' }}
               viewport={{ once: true }}
            >
               <Box
                  sx={{
                     height: '100%',
                     width: '100%',
                     position: 'relative'
                  }}
               >
                  <Box
                     sx={theme => ({
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: '25%',
                        [theme.breakpoints.down('xl')]: {
                           paddingBottom: '30%',
                        },
                        [theme.breakpoints.down('lg')]: {
                           paddingBottom: '35%',
                        },
                        [theme.breakpoints.down('md')]: {
                           paddingBottom: '40%',
                        }
                     })}
                  >
                     <Box className="cubespinner">
                        {skills.map((item, index) => (
                           <Box key={index} className={darkMode ? `${'face' + (index + 1)} face-dark` : `${'face' + (index + 1)} face`}>
                              <img src={item} alt='' />
                           </Box>
                        ))}
                     </Box>
                  </Box>
               </Box>
            </motion.div>
            <Box
               sx={theme => ({
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
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
                     initial={{ opacity: 0, x: mdWidth ? -50 : 100 }}
                     whileInView={{ opacity: 1, x: 0 }}
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
                     About Me
                  </Typography>
                  <motion.div
                     initial={{ opacity: 0, x: mdWidth ? -50 : 100 }}
                     whileInView={{ opacity: 1, x: 0 }}
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
                  sx={theme => ({
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '1rem',
                     width: '80%',
                     marginBottom: '10px',
                     [theme.breakpoints.down('xl')]: {
                        width: '90%'
                     },
                     [theme.breakpoints.down('lg')]: {
                        width: '100%'
                     }
                  })}
               >
                  {aboutText.map((text, index) => (
                     <Typography
                        component={motion.h3}
                        initial={{ opacity: 0, x: mdWidth ? -50 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
                  initial={{ opacity: 0, x: mdWidth ? -50 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <a href='#contact'>
                     <PrimaryButton
                        text='Contact Me'
                        height={height}
                        icon={<SendIcon sx={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
                     />
                  </a>
               </motion.div>
            </Box>
         </Box>
      </Box>
   );
};

export default About;