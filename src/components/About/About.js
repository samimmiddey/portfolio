import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import PrimaryButton from '../UI/PrimaryButton';
import { BiSend } from "react-icons/bi";
import { motion } from 'framer-motion';
import { uiContext } from '../../context/ui-context';
import PrimaryHeader from '../UI/PrimaryHeader';
import PrimaryPara from '../UI/PrimaryPara';

const gridStyle = theme => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   minHeight: '100px',
   [theme.breakpoints.down(768)]: {
      gridTemplateColumns: 'none',
      // gridTemplateRows: 'repeat(2, 1fr)'
   },
   [theme.breakpoints.down(500)]: {
      paddingTop: '1rem',
      paddingBottom: '4.5rem',
   },
   [theme.breakpoints.down(400)]: {
      paddingTop: 0
   }
});

const firstGridStyle = theme => ({
   height: '100%',
   width: '100%',
   position: 'relative',
   [theme.breakpoints.down(768)]: {
      height: '350px'
   }
});

const firstGridInnerContainerStyle = theme => ({
   position: 'absolute',
   width: '100%',
   height: '100%',
   display: 'flex',
   alignItems: 'center',
   paddingBottom: '30%',
   [theme.breakpoints.down('xl')]: {
      paddingBottom: '35%',
   },
   [theme.breakpoints.down('md')]: {
      paddingBottom: '45%',
   },
   [theme.breakpoints.down(768)]: {
      paddingBottom: '230px'
   }
});

const secondGridStyle = theme => ({
   height: '100%',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'center',
   rowGap: '1.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '1.35rem'
   },
   [theme.breakpoints.down('md')]: {
      rowGap: '1.25rem'
   }
});

const paraContainer = theme => ({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '1rem',
   width: '95%',
   marginBottom: '0.5rem',
   [theme.breakpoints.down('xl')]: {
      width: '90%',
      rowGap: '0.75rem'
   },
   [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginBottom: '5px'
   }
});

const skills = [html, css, js, react, redux, mui];

const aboutText = [
   "I am a creative Web Designer and Front-end Developer with a passion for crafting visually appealing and user-friendly digital experiences. With a strong foundation in various web technologies, I specialize in transforming ideas into fully functional and responsive websites.",
   "My design philosophy is centered around simplicity, usability, and a keen eye for detail. I strive to deliver solutions that are not only aesthetically pleasing but also optimized for performance and accessibility. Constantly exploring the latest trends and technologies, I am committed to delivering innovative and high-quality results that meet the unique needs of every project."
];

const About = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box
         id='about'
         className='section'
         sx={{ overflowX: 'hidden' }}
      >
         <Box className='container section-padding' sx={gridStyle}>

            {/* First Grid */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
               viewport={{ once: true }}
            >
               <Box sx={firstGridStyle}>
                  <Box sx={firstGridInnerContainerStyle}>
                     <div className="cubespinner">
                        {
                           skills.map((item, index) => (
                              <div
                                 key={index}
                                 className={darkMode ? `${'face' + (index + 1)} face-dark` : `${'face' + (index + 1)} face`}
                              >
                                 <img src={item} alt='' />
                              </div>
                           ))
                        }
                     </div>
                  </Box>
               </Box>
            </motion.div>

            {/* Second Grid */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
               viewport={{ once: true }}
            >
               <Box sx={secondGridStyle}>
                  <PrimaryHeader text={<>About <span>Me</span> </>} />
                  <Box sx={paraContainer}>
                     {
                        aboutText.map((text, index) => (
                           <PrimaryPara
                              key={index}
                              text={text}
                           />
                        ))
                     }
                  </Box>
                  <a href='#contact'>
                     <PrimaryButton
                        text='Contact Me'
                        icon={
                           <BiSend style={{ marginLeft: '10px', fontSize: '1.3rem' }} />
                        }
                     />
                  </a>
               </Box>
            </motion.div>
         </Box>
      </Box>
   );
};

export default About;