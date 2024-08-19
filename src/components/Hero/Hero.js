import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import { MdFileDownload } from "react-icons/md";
import { CgMouse } from 'react-icons/cg';
import { RiArrowDownLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { uiContext } from '../../context/ui-context';
import HomeLottie from '../UI/HomeLottie';
import resume from '../../assets/Resume.pdf';

const innerContainerStyle = theme => ({
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
      minHeight: 'calc(100vh - 70px)',
      gridTemplateColumns: 'none',
      rowGap: '1.5rem',
      paddingTop: '8rem',
      paddingBottom: '8rem'
   },
   [theme.breakpoints.down(500)]: {
      paddingTop: '6rem',
      paddingBottom: 0
   },
   [theme.breakpoints.down(400)]: {
      paddingTop: '4.5rem'
   },
   [theme.breakpoints.down(380)]: {
      rowGap: '1rem'
   }
});

const firstGridStyle = theme => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   rowGap: '2.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '2rem'
   },
   [theme.breakpoints.down('md')]: {
      rowGap: '1.5rem',
      height: '100%',
      justifyContent: 'center'
   },
   [theme.breakpoints.down('sm')]: {
      rowGap: '1.5rem',
      height: '100%',
      justifyContent: 'start'
   },
   [theme.breakpoints.down(380)]: {
      rowGap: '1.25rem'
   }
});

const heroTitleStyle = theme => ({
   fontWeight: 800,
   fontSize: '4.5rem',
   marginTop: '1rem',
   lineHeight: '1.3',
   letterSpacing: 2,
   color: 'text.primary',
   fontFamily: 'primary.font',
   [theme.breakpoints.down('xl')]: {
      fontSize: '3.5rem',
   },
   [theme.breakpoints.down('lg')]: {
      fontSize: '3rem'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '2.75rem',
      letterSpacing: 1,
   },
   [theme.breakpoints.down('sm')]: {
      marginTop: 0
   },
   [theme.breakpoints.down(380)]: {
      fontSize: '2rem'
   }
});

const heroSubTextStyle = theme => ({
   marginTop: '-14px',
   color: 'text.secondary',
   fontWeight: 500,
   fontSize: '1.1rem',
   letterSpacing: '5px',
   lineHeight: 1.8,
   [theme.breakpoints.down('xl')]: {
      fontSize: '15px',
      marginTop: '-12px'
   },
   [theme.breakpoints.down('lg')]: {
      fontSize: '14px'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '13px'
   },
   [theme.breakpoints.down('sm')]: {
      marginTop: '-8px',
      letterSpacing: '2px'
   },
   [theme.breakpoints.down(380)]: {
      letterSpacing: '1px',
      marginTop: '-6px'
   }
});

const scrollTextContainerStyle = theme => ({
   marginTop: '2rem',
   display: 'flex',
   alignItems: 'center',
   columnGap: '10px',
   [theme.breakpoints.down('xl')]: {
      marginTop: '1.75rem',
   },
   [theme.breakpoints.down('md')]: {
      marginTop: '1.5rem',
   },
   [theme.breakpoints.down('sm')]: {
      marginTop: '1.25rem',
   },
   [theme.breakpoints.down(380)]: {
      marginTop: '0.5rem'
   }
});

const scrollTextStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   [theme.breakpoints.down('xl')]: {
      fontSize: '15px'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

const secondGridStyle = theme => ({
   width: '92%',
   justifySelf: 'center',
   marginBottom: '2.5rem',
   [theme.breakpoints.down('xl')]: {
      marginBottom: '1.5rem',
      width: '85%'
   },
   [theme.breakpoints.down('lg')]: {
      width: '90%'
   },
   [theme.breakpoints.down('md')]: {
      marginBottom: 0,
      width: '85%'
   },
   [theme.breakpoints.down('sm')]: {
      gridRow: '1 / 2',
      width: '60%',
      margin: '0 auto',
      alignSelf: 'end'
   },
   [theme.breakpoints.down(500)]: {
      width: '75%'
   },
   [theme.breakpoints.down(380)]: {
      width: '70%'
   }
});

const bottomBoxStyle = theme => ({
   [theme.breakpoints.down(500)]: {
      height: '70px',
      width: '100%',
   }
});

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
};

const item = {
   hidden: {
      opacity: 0,
      y: -175
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         ease: [0.6, 0.01, -0.05, 0.95]
      }
   }
};

const mainText = ['H', 'i', 'I', "'", 'm', 'S', 'a', 'm', 'i', 'm', 'W', 'e', 'b', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

const Hero = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box id='home' className='container section'>
         <Box sx={innerContainerStyle}>

            {/* First Grid */}
            <Box sx={firstGridStyle}>
               <Typography
                  variant='h2'
                  component={motion.h2}
                  variants={parent}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  sx={heroTitleStyle}
               >
                  {
                     mainText.map((letter, index) => (
                        <motion.div
                           style={{ display: `${(index === 1 || index === 9) ? 'inline' : 'inline-block'}` }}
                           variants={item}
                           viewport={{ once: true }}
                           key={index}
                           className={index > 4 && index < 10 ? (darkMode ? 'title-color-dark' : 'title-color-light') : ''}
                        >
                           {(index === 4 || index === 12) ? letter.concat('\xa0') : letter}
                           {(index === 1 || index === 9) && <br />}
                        </motion.div>
                     ))
                  }
               </Typography>
               <Typography
                  component={motion.h2}
                  initial={{ opacity: 0, x: '-50%' }}
                  whileInView={{ opacity: 1, x: '0%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  sx={heroSubTextStyle}
               >
                  WEB DESIGNER | FRONT-END DEVELOPER
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
                        icon={<MdFileDownload style={{ marginLeft: '10px', fontSize: '1.35rem' }} />}
                     />
                  </a>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
               >
                  <Box sx={scrollTextContainerStyle}>
                     <CgMouse style={{ color: darkMode ? '#5442af' : '#784cfb', fontSize: '1.5rem' }} />
                     <Typography sx={scrollTextStyle}>Scroll Down</Typography>
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

            {/* Second Grid */}
            <Box sx={secondGridStyle}>
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
         <Box sx={bottomBoxStyle} />
      </Box>
   );
};

export default Hero;