import React, { useContext } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import frontend from '../../assets/frontend.png';
import frontendDark from '../../assets/frontendDark.png';
import designer from '../../assets/designer.png';
import designerDark from '../../assets/designerDark.png';
import development from '../../assets/development.png';
import developmentDark from '../../assets/developmentDark.png';
import next from '../../assets/next.png';
import nextDark from '../../assets/nextdark.png';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';

const skillsDetails = [
   {
      title: 'UI/UX Designing',
      description: "I make sure that not only the UI is aesthetically pleasing, but the user experience as well",
      icon: designer,
      iconDark: designerDark
   },
   {
      title: 'ReactJS Developer',
      description: "I build web applications using ReactJS and many other modern front end technologies",
      icon: development,
      iconDark: developmentDark,
   },
   {
      title: 'NextJS Developer',
      description: "I build web applications using NextJS and optimize them to their maximum potential",
      icon: next,
      iconDark: nextDark,
   },
   {
      title: 'Front End Developer',
      description: "I'm a front end developer focused heavily on the UX aspect of web applications",
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
         delay: 0.3,
         staggerChildren: 0.2
      }
   }
}

const children = {
   hidden: {
      opacity: 0,
      y: -60
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 3,
         ease: [0.6, 0.01, -0.05, 0.95]
      }
   }
}

const Services = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box
         id='services'
         className='section'
         sx={{
            backgroundColor: darkMode ? '#211d35' : '#f8f6fe'
         }}
      >
         <Box
            className='container section-padding'
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
            <motion.div
               initial={{ opacity: 0, y: -60 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.6 }}
               viewport={{ once: true }}
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
                        Services
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
                        I know that good design means good business
                     </Typography>
                  </Box>
               </Box>
            </motion.div>
            <Grid
               container
               component={motion.div}
               variants={parent}
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
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
               {skillsDetails.map((item, index) => (
                  <Grid
                     component={motion.div}
                     variants={children}
                     viewport={{ once: true }}
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
                     <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                     >
                        <Card
                           elevation={0}
                           sx={theme => ({
                              padding: '3rem 2rem',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              rowGap: '1rem',
                              border: darkMode ? '1px solid #292442' : '1px solid #fff',
                              transition: '0.3s ease',
                              backgroundColor: darkMode ? '#292442' : '#fff',
                              boxShadow: darkMode ? '0 0 5px 0px rgba(84, 66, 175, 0.75)' : '0 0 10px 0px rgba(120, 76, 251, 0.3)',
                              '&:hover': {
                                 boxShadow: darkMode ? '0 0 20px 0px #5442af' : '0 0 20px 0px #784cfb'
                              },
                              flex: 1,
                              [theme.breakpoints.down('md')]: {
                                 padding: '2rem 1rem'
                              }
                           })}
                        >
                           <img src={darkMode ? item.iconDark : item.icon} alt="" />
                           <Typography
                              variant='h6'
                              sx={{
                                 fontWeight: 700,
                                 textAlign: 'center',
                                 color: 'text.primary'
                              }}
                           >
                              {item.title}
                           </Typography>
                           <Typography
                              sx={theme => ({
                                 color: 'text.secondary',
                                 fontWeight: 500,
                                 fontSize: '14px',
                                 textAlign: 'center',
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '13px'
                                 }
                              })}
                           >
                              {item.description}
                           </Typography>
                        </Card>
                     </Tilt>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box >
   );
};

export default Services;