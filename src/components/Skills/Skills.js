import React, { useContext } from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import scss from '../../assets/skills/scss.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import git from '../../assets/skills/git.png';
import figma from '../../assets/skills/figma.png';
import firebase from '../../assets/skills/firebase.png';
import tailwind from '../../assets/skills/tailwind.png';
import react from '../../assets/skills/react.png';
import sanity from '../../assets/skills/sanity.png';
import framer from '../../assets/skills/framer.png';
import next from '../../assets/skills/next.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import gsap from '../../assets/skills/gsap.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import PrimaryButton from '../UI/PrimaryButton';
import { uiContext } from '../../context/ui-context';
import PrimaryHeader from '../UI/PrimaryHeader';
import PrimaryPara from '../UI/PrimaryPara';
import { CgBriefcase } from "react-icons/cg";

const containerStyle = theme => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   columnGap: '5rem',
   [theme.breakpoints.down('xl')]: {
      columnGap: '3rem'
   },
   [theme.breakpoints.down('lg')]: {
      columnGap: '2rem'
   },
   [theme.breakpoints.down(768)]: {
      gridTemplateColumns: 'none',
      grid: 'row',
      columnGap: 0,
      rowGap: '3.5rem'
   }
});

const firstGrid = theme => ({
   height: '100%',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
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

const iconGridStyle = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
};

const iconBoxContainerStyle = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center'
};

const iconTextStyle = theme => ({
   textAlign: 'center',
   mt: 1.5,
   color: 'text.primary',
   fontWeight: 600,
   fontSize: '14px',
   [theme.breakpoints.down('xl')]: {
      fontSize: '13px'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '12px'
   }
});

const parent = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.2,
         staggerChildren: 0.12
      }
   }
}

const children = {
   hidden: {
      opacity: 0,
      y: -50
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

const Skills = () => {
   const { darkMode } = useContext(uiContext);

   const icons = [
      {
         icon: html,
         text: 'HTML',
         color: '#ff9900'
      },
      {
         icon: css,
         text: 'CSS',
         color: '#3399ff'
      },
      {
         icon: js,
         text: 'JavaScript',
         color: '#cccc00'
      },
      {
         icon: scss,
         text: 'SCSS',
         color: '#ff6699'
      },
      {
         icon: react,
         text: 'React.js',
         color: '#33bbff'
      },
      {
         icon: next,
         text: 'Next.js',
         color: darkMode ? '#f8f8f8' : '#1e1e20'
      },
      {
         icon: redux,
         text: 'Redux',
         color: '#9933ff'
      },
      {
         icon: bootstrap,
         text: 'Bootstrap',
         color: '#884dff'
      },
      {
         icon: mui,
         text: 'Material UI',
         color: '#3399ff'
      },
      {
         icon: tailwind,
         text: 'Tailwind CSS',
         color: '#00ccff'
      },
      {
         icon: gsap,
         text: 'GSAP',
         color: '#00cc66'
      },
      {
         icon: framer,
         text: 'Framer Motion',
         color: '#4d88ff'
      },
      {
         icon: figma,
         text: 'Figma',
         color: '#cc6699'
      },
      {
         icon: firebase,
         text: 'Firebase',
         color: '#e6b800'
      },
      {
         icon: sanity,
         text: 'Sanity',
         color: '#ff471a'
      },
      {
         icon: git,
         text: 'Git & GitHub',
         color: '#ff6600'
      }
   ];

   const skillsText = [
      "I possess a comprehensive skill set that bridges the gap between design and development, enabling me to create visually appealing and highly functional websites. My expertise in UI/UX design allows me to craft intuitive and engaging user interfaces that prioritize user experience. I am well-versed in responsive design, ensuring that websites I build are fully optimized across all devices.",
      "I have a strong command in HTML, CSS, and JavaScript, which I use to bring designs to life with clean, efficient, and maintainable code. My experience with CSS preprocessors like SASS enhances my ability to write modular and scalable stylesheets. I’m extremely proficient in JavaScript frameworks such as React.js & Next.js, allowing me to build dynamic, interactive & responsive web applications."
   ];

   return (
      <Box sx={{ backgroundColor: 'bg.secondary' }}>
         <Box
            id='skills'
            className='container section-padding section'
            sx={containerStyle}
         >
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
               viewport={{ once: true }}
            >
               <Box sx={firstGrid}>
                  <PrimaryHeader text={<>My <span>Skills</span> </>} />
                  <Box sx={paraContainer}>
                     {
                        skillsText.map((text, index) => (
                           <PrimaryPara
                              key={index}
                              text={text}
                           />
                        ))
                     }
                  </Box>
                  <a href='#contact'>
                     <PrimaryButton
                        text='Hire Me'
                        icon={<CgBriefcase style={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
                     />
                  </a>
               </Box>
            </motion.div>
            <Grid
               container
               component={motion.div}
               variants={parent}
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
               rowGap={{ xs: 3.5, sm: 4.5, xl: 5 }}
               sx={{ margin: '0 auto' }}
            >
               {
                  icons.map((item, index) => (
                     <Grid
                        item
                        key={index}
                        xs={4} lg={3}
                        sx={iconGridStyle}
                        component={motion.div}
                        variants={children}
                        viewport={{ once: true }}
                     >
                        <div style={iconBoxContainerStyle}>
                           <Box
                              sx={theme => ({
                                 height: '100px',
                                 width: '100px',
                                 borderRadius: '50%',
                                 backgroundColor: `${item.color}25`,
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 transition: '300ms ease',
                                 border: `1px solid ${item.color}75`,
                                 [theme.breakpoints.down('xl')]: {
                                    height: '75px',
                                    width: '75px'
                                 },
                                 [theme.breakpoints.down('lg')]: {
                                    height: '65px',
                                    width: '65px'
                                 },
                                 [theme.breakpoints.down('md')]: {
                                    height: '56px',
                                    width: '56px'
                                 },
                                 '&:hover': {
                                    boxShadow: `0 0 20px 0px ${item.color}`,
                                    transform: 'scale(1.1)'
                                 }
                              })}
                           >
                              <img
                                 src={item.icon}
                                 alt=""
                                 className='skill-icon'
                              />
                           </Box>
                           <Typography sx={iconTextStyle}>{item.text}</Typography>
                        </div>
                     </Grid>
                  ))
               }
            </Grid>
         </Box>
      </Box>
   );
};

export default Skills;