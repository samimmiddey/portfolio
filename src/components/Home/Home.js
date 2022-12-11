import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import DownloadIcon from '@mui/icons-material/Download';
import { CgMouse } from 'react-icons/cg';
import { RiArrowDownLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';
import HomeLottie from '../UI/HomeLottie';
import resume from '../../assets/Resume.pdf';

const parent = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.125
      }
   }
}

const item = {
   hidden: {
      opacity: 0,
      y: -200
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         ease: [0.6, 0.01, -0.05, 0.95]
      }
   }
}

const mainText = ['H', 'i', 'I', "'", 'm', 'S', 'a', 'm', 'i', 'm', 'W', 'e', 'b', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

const Home = () => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   return (
      <Box
         id='home'
         className='container section'
      >
         <Box
            sx={theme => ({
               paddingTop: '70px',
               minHeight: '100.1vh',
               display: 'grid',
               gridTemplateColumns: 'repeat(2, 1fr)',
               alignItems: 'center',
               [theme.breakpoints.down('md')]: {
                  minHeight: 0,
                  paddingTop: '9rem',
                  paddingBottom: '9rem'
               },
               [theme.breakpoints.down('sm')]: {
                  // minHeight: '100vh'
               },
               [theme.breakpoints.down(500)]: {
                  minHeight: 'calc(100vh - 60px)',
                  padding: 0,
                  gridTemplateColumns: 'none',
                  rowGap: '1.5rem'
               },
               [theme.breakpoints.down(380)]: {
                  rowGap: '1.5rem'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: '2rem',
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.5rem',
                     height: '100%',
                     justifyContent: 'center'
                  },
                  [theme.breakpoints.down('sm')]: {
                     rowGap: '1.5rem',
                     height: '100%',
                     justifyContent: 'start'
                  }
               })}
            >
               <Typography
                  variant='h2'
                  component={motion.h2}
                  variants={parent}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  sx={theme => ({
                     fontWeight: 500,
                     fontSize: '4rem',
                     marginTop: '1rem',
                     lineHeight: '1.3',
                     letterSpacing: 2,
                     color: 'text.primary',
                     // color: '#2d1863',
                     fontFamily: 'Abril Fatface',
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '3.5rem',
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '3rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '2.5rem',
                        letterSpacing: 1,
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '2rem',
                        marginTop: 0
                     },
                     [theme.breakpoints.down(380)]: {
                        fontSize: '1.75rem'
                     }
                  })}
               >
                  {mainText.map((letter, index) => (
                     <motion.div
                        style={{ display: `${(index === 1 || index === 9) ? 'inline' : 'inline-block'}` }}
                        variants={item}
                        viewport={{ once: true }}
                        key={index}
                     >
                        {(index === 4 || index === 12) ? letter.concat('\xa0') : letter}
                        {(index === 1 || index === 9) && <br />}
                     </motion.div>
                  ))}
               </Typography>
               <Typography
                  component={motion.h2}
                  initial={{ opacity: 0, x: '-100%' }}
                  whileInView={{ opacity: 1, x: '0%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  sx={theme => ({
                     marginTop: '-1rem',
                     color: 'text.secondary',
                     fontWeight: 600,
                     fontSize: '1.1rem',
                     letterSpacing: '5px',
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '1rem'
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '13px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '12px',
                        marginTop: '-8px'
                     }
                  })}
               >
                  {!mdWidth && 'WEB DESIGNER |'} FRONT END DEVELOPER
               </Typography>
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <a href={resume} download>
                     <PrimaryButton
                        text='Download CV'
                        height={height}
                        icon={<DownloadIcon sx={{ marginLeft: '10px' }} />}
                     />
                  </a>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <Box
                     sx={theme => ({
                        marginTop: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                        [theme.breakpoints.down('md')]: {
                           marginTop: '1.5rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                           marginTop: '1.25rem',
                        }
                     })}
                  >
                     <CgMouse style={{ color: darkMode ? '#5442af' : '#784cfb', fontSize: '1.5rem' }} />
                     <Typography
                        sx={theme => ({
                           color: 'text.secondary',
                           fontWeight: 500,
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '13px'
                           }
                        })}
                     >
                        Scroll Down
                     </Typography>
                     <RiArrowDownLine
                        className='arrow-animation'
                        style={{
                           color: darkMode ? '#5442af' : '#784cfb',
                           fontSize: '1.5rem'
                        }}
                     />
                  </Box>
               </motion.div>
            </Box>
            <Box
               sx={theme => ({
                  width: '95%',
                  justifySelf: 'center',
                  marginBottom: '2rem',
                  [theme.breakpoints.down('lg')]: {
                     width: '90%'
                  },
                  [theme.breakpoints.down('md')]: {
                     marginBottom: 0,
                     width: '85%'
                  },
                  [theme.breakpoints.down(500)]: {
                     gridRow: '1 / 2',
                     width: '75%',
                     margin: '0 auto',
                     alignSelf: 'end'
                  }
               })}
            >
               <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <HomeLottie />
               </motion.div>
            </Box>
         </Box>
         <Box
            sx={theme => ({
               [theme.breakpoints.down(500)]: {
                  height: '60px',
                  width: '100%',
               }
            })}
         />
      </Box>
   );
};

export default Home;