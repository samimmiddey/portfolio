import React, { useContext } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import frontend from '../../assets/frontend.png';
import frontendDark from '../../assets/frontendDark.png';
import designer from '../../assets/designer.png';
import designerDark from '../../assets/designerDark.png';
import react from '../../assets/react.png';
import reactDark from '../../assets/reactDark.png';
import next from '../../assets/next.png';
import nextDark from '../../assets/nextDark.png';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { uiContext } from '../../context/ui-context';
import PrimaryHeader from '../UI/PrimaryHeader';
import HeaderPara from '../UI/HeaderPara';

const containerStyle = theme => ({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '2.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '2.25rem'
   },
   [theme.breakpoints.down('md')]: {
      rowGap: '2rem'
   }
});

const headerStyle = theme => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   rowGap: '1.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '1.25rem'
   },
   [theme.breakpoints.down('sm')]: {
      rowGap: '1rem'
   }
});

const cardStyle = theme => ({
   padding: '2.5rem 1.25rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '0.8rem',
   border: '1px solid transparent',
   borderColor: 'primary.main',
   transition: '0.3s ease',
   backgroundColor: 'bg.card',
   height: '100%',
   [theme.breakpoints.down('xl')]: {
      padding: '2rem 1rem'
   }
});

const imgContainerStyle = theme => ({
   height: '126px',
   width: '126px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: '100%',
   backgroundColor: 'bg.secondary',
   marginBottom: '0.75rem',
   [theme.breakpoints.down('xl')]: {
      height: '110px',
      width: '110px'
   },
   [theme.breakpoints.down('md')]: {
      marginBottom: '0.65rem'
   }
});

const titleStyle = theme => ({
   fontWeight: 800,
   textAlign: 'center',
   color: 'text.primary',
   fontFamily: 'primary.font',
   fontSize: '1.35rem',
   [theme.breakpoints.down('xl')]: {
      fontSize: '1.15rem'
   }
});

const descStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   fontSize: '15px',
   textAlign: 'center',
   lineHeight: 1.6,
   [theme.breakpoints.down('xl')]: {
      fontSize: '13px'
   }
});

const skillsDetails = [
   {
      title: 'UI/UX Designing',
      description: "Transforming user needs and business goals into elegant and functional design solutions",
      icon: designer,
      iconDark: designerDark
   },
   {
      title: 'React.js Development',
      description: "Expert in building fast, responsive, high-performance, scalable user interfaces with React",
      icon: react,
      iconDark: reactDark
   },
   {
      title: 'Next.js Development',
      description: "Specialized in developing high-performance web apps with Next for seamless user experience",
      icon: next,
      iconDark: nextDark
   },
   {
      title: 'Front-end Development',
      description: "Turning designs into interactive, high-quality web experiences using modern technologies.",
      icon: frontend,
      iconDark: frontendDark
   }
];

const parent = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.2,
         staggerChildren: 0.2
      }
   }
}

const children = {
   hidden: {
      opacity: 0,
      y: 50
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

const Services = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box id='services' className='section'>
         <Box
            className='container section-padding'
            sx={containerStyle}
         >
            <Box sx={headerStyle}>
               <PrimaryHeader text={<>My <span>Services</span></>} />
               <HeaderPara
                  text='Crafting visually appealing and user-friendly websites with a blend of creativity and technical expertise. Proficient in the latest front-end technologies and design trends'
               />
            </Box>
            <Grid
               container
               component={motion.div}
               variants={parent}
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
               spacing={{ xs: 2.5, xl: 3 }}
            >
               {
                  skillsDetails.map((item, index) => (
                     <Grid
                        component={motion.div}
                        variants={children}
                        viewport={{ once: true }}
                        item
                        key={index}
                        xs={12} sm={6} md={4} lg={3}
                     >
                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} style={{ height: '100%' }}>
                           <Card elevation={0} sx={cardStyle}>
                              <Box sx={imgContainerStyle}>
                                 <img src={darkMode ? item.iconDark : item.icon} alt="" className='service-icon' />
                              </Box>
                              <Typography variant='h6' sx={titleStyle}>
                                 {item.title}
                              </Typography>
                              <Typography sx={descStyle}>
                                 {item.description}
                              </Typography>
                           </Card>
                        </Tilt>
                     </Grid>
                  ))
               }
            </Grid>
         </Box>
      </Box >
   );
};

export default Services;