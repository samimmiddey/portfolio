import React, { useContext } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';
import { RiFacebookFill } from 'react-icons/ri';
import { RiLinkedinFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';

const Footer = () => {
   const { darkMode, toggleModal } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box
         className={darkMode ? 'primary-background-dark' : 'primary-background'}
         sx={{
            color: '#fff'
         }}
      >
         <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <Box
               className='container'
               sx={theme => ({
                  padding: '5rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: '3rem',
                  [theme.breakpoints.down('xl')]: {
                     rowGap: '2.5rem',
                  },
                  [theme.breakpoints.down('lg')]: {
                     rowGap: '2rem',
                  },
                  [theme.breakpoints.down('md')]: {
                     padding: '4rem 0'
                  },
                  [theme.breakpoints.down('sm')]: {
                     padding: '4rem 2rem',
                     textAlign: 'center'
                  },
                  [theme.breakpoints.down(350)]: {
                     padding: '3rem 0',
                     textAlign: 'center'
                  }
               })}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '10px',
                     alignItems: 'center'
                  }}
               >
                  <Typography
                     variant='h6'
                     sx={theme => ({
                        fontWeight: 500,
                        fontFamily: 'Abril Fatface',
                        color: darkMode ? '#bcbac4' : '#fff',
                        letterSpacing: 2,
                        fontSize: '2rem',
                        [theme.breakpoints.down('md')]: {
                           fontSize: '1.75rem'
                        },
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '1.5rem'
                        }
                     })}
                  >
                     Samim Middey
                  </Typography>
                  <Typography
                     sx={{
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        fontWeight: 300,
                        fontSize: '13px',
                        color: darkMode ? '#bcbac4' : '#fff',
                     }}
                  >
                     {!smWidth && 'Web Designer |'} Front End Developer
                  </Typography>
               </Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'flex-start',
                     columnGap: '5rem',
                     [theme.breakpoints.down('lg')]: {
                        columnGap: '4rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        columnGap: '3.5rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        columnGap: 0,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        rowGap: '2rem'
                     }
                  })}
               >
                  {['home', 'about', 'skills', 'portfolio', 'contact', 'Credit'].map((item, index) => (
                     <a
                        href={`#${item.toLowerCase()}`}
                        key={index}
                        onClick={() => {
                           item === 'Credit' && toggleModal();
                        }}
                     >
                        <Typography
                           sx={theme => ({
                              fontSize: '14px',
                              fontWeight: 500,
                              color: darkMode ? '#bcbac4' : '#fff',
                              textTransform: 'uppercase',
                              transition: '0.3s',
                              '&:hover': {
                                 color: '#f8f6fe'
                              },
                              [theme.breakpoints.down('md')]: {
                                 fontSize: '13px'
                              }
                           })}
                        >
                           {item}
                        </Typography>
                     </a>
                  ))}
               </Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'flex-start',
                     columnGap: '3rem',
                     [theme.breakpoints.down('md')]: {
                        columnGap: '2.5rem'
                     }
                  })}
               >
                  {[
                     {
                        icon: <RiFacebookFill style={{ fontSize: '1.5rem' }} />,
                        link: 'https://www.facebook.com/middeysamim'
                     },
                     {
                        icon: <RiLinkedinFill style={{ fontSize: '1.5rem' }} />,
                        link: 'https://www.linkedin.com/in/samimmiddey'
                     },
                     {
                        icon: <RiGithubFill style={{ fontSize: '1.5rem' }} />,
                        link: 'https://github.com/samimmiddey'
                     }
                  ].map((item, index) => (
                     <a
                        href={item.link}
                        target='_blank'
                        rel="noreferrer"
                        key={index}
                     >
                        <Button
                           disableElevation
                           variant='contained'
                           // color='secondary'
                           sx={theme => ({
                              color: darkMode ? '#292442' : '#fff',
                              minHeight: 0,
                              backgroundColor: darkMode ? '#8d85b9' : '#6039d6',
                              minWidth: 0,
                              padding: '10px',
                              borderRadius: '50%',
                              transition: '300ms ease',
                              [theme.breakpoints.down('md')]: {
                                 padding: '9px'
                              },
                              [theme.breakpoints.down('sm')]: {
                                 padding: '8px'
                              },
                              '&:hover': {
                                 backgroundColor: darkMode ? '#675da2' : '#4423a9',
                              }
                           })}
                        >
                           {item.icon}
                        </Button>
                     </a>
                  ))}
               </Box>
               <Box>
                  <Typography
                     sx={theme => ({
                        color: darkMode ? '#bcbac4' : '#fff',
                        [theme.breakpoints.down('md')]: {
                           fontSize: '15px'
                        },
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '14px'
                        }
                     })}
                  >
                     Copyright&copy; 2022 All Rights Reserved
                  </Typography>
               </Box>
            </Box>
         </motion.div >
      </Box >
   );
};

export default Footer;