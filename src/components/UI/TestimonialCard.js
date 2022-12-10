import React, { useContext } from 'react';
import { Avatar, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import leftquote from '../../assets/leftquote.png';
import leftquoteDark from '../../assets/leftquoteDark.png';
import rightquote from '../../assets/rightquote.png';
import rightquoteDark from '../../assets/rightquoteDark.png';
import Tilt from 'react-parallax-tilt';
import { uiContext } from '../context/ui-context';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';

const TestimonialCard = ({ data }) => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Tilt
         tiltMaxAngleX={smWidth ? 15 : 10}
         tiltMaxAngleY={smWidth ? 15 : 10}
      >
         <Card
            className={darkMode ? 'testimonial-card-dark' : 'testimonial-card'}
            elevation={0}
            sx={theme => ({
               overflow: 'visible',
               margin: '6rem 4rem 4rem 4rem',
               padding: '2rem 1.5rem',
               border: darkMode ? '1px solid #292442' : '1px solid #fff',
               transition: '0.3s ease',
               backgroundColor: darkMode ? '#292442' : '#fff',
               boxShadow: darkMode ? '0 0 5px 0px rgba(84, 66, 175, 0.75)' : '0 0 10px 0px rgba(120, 76, 251, 0.3)',
               '&:hover': {
                  boxShadow: darkMode ? '0 0 20px 0px #5442af' : '0 0 20px 0px #784cfb'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '2rem 1rem 1rem 1rem',
                  margin: '6rem 1.5rem 2rem 1.5rem'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  rowGap: '1rem',
                  zIndex: 99,
                  marginTop: '-87px',
                  [theme.breakpoints.down('sm')]: {
                     marginTop: '-74.5px'
                  }
               })}
            >
               <Box
                  className='testimonial-img'
                  sx={{
                     padding: '5px',
                     boxShadow: darkMode ? '0 0 5px 0px rgba(84, 66, 175, 0.75)' : '0 0 10px 0px rgba(120, 76, 251, 0.3)',
                     display: 'inline-flex',
                     borderRadius: '50%',
                     backgroundColor: darkMode ? '#8d85b9' : '#fff',
                     transition: '0.3s ease'
                  }}
               >
                  <Avatar
                     src={data.img}
                     alt=''
                     sx={{
                        height: smWidth ? '75px' : '100px',
                        width: smWidth ? '75px' : '100px'
                     }}
                  />
               </Box>
               <Box
                  sx={{
                     textAlign: 'center'
                  }}
               >
                  <Typography
                     variant='h6'
                     sx={{ fontWeight: 700, color: 'text.primary' }}>
                     {data.name}
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
                     {data.position}
                  </Typography>
               </Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     justifyContent: 'center',
                     columnGap: '10px',
                     [theme.breakpoints.down('sm')]: {
                        marginTop: '-6px'
                     }
                  })}
               >
                  <RiFacebookCircleFill
                     style={{
                        fontSize: smWidth ? '1.5rem' : '1.75rem',
                        color: darkMode ? '#8d85b9' : '#784cfb',
                     }}
                  />
                  <RiLinkedinBoxFill
                     style={{
                        fontSize: smWidth ? '1.5rem' : '1.75rem',
                        color: darkMode ? '#8d85b9' : '#784cfb',
                     }}
                  />
                  <RiGithubFill
                     style={{
                        fontSize: smWidth ? '1.5rem' : '1.75rem',
                        color: darkMode ? '#8d85b9' : '#784cfb',
                     }}
                  />
               </Box>
            </Box>
            <Box
               sx={theme => ({
                  marginTop: '1rem',
                  [theme.breakpoints.down('sm')]: {
                     marginTop: '12px'
                  }
               })}
            >
               <Box>
                  <img style={{ height: '50px', width: '50px' }} src={darkMode ? leftquoteDark : leftquote} alt="" />
               </Box>
               <Typography
                  sx={theme => ({
                     color: 'text.secondary',
                     fontWeight: 500,
                     fontSize: '14px',
                     textAlign: 'center',
                     lineHeight: '1.6',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '13px'
                     }
                  })}
               >
                  {data.comment}
               </Typography>
               <Box
                  sx={{
                     textAlign: 'end'
                  }}
               >
                  <img style={{ height: '50px', width: '50px' }} src={darkMode ? rightquoteDark : rightquote} alt="" />
               </Box>
            </Box>
         </Card>
      </Tilt>
   );
};

export default TestimonialCard;