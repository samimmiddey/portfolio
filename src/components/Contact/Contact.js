import React, { useContext } from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import ContactMethods from './ContactMethods';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';

const Contact = () => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <Box
         id='contact'
         className='container section-padding section'
         sx={theme => ({
            overflowX: 'hidden',
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
            },
            [theme.breakpoints.down(350)]: {
               padding: '4.5rem 0',
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
                     Contact Me
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
                     Get in touch with me at your convenience
                  </Typography>
               </Box>
            </Box>
         </motion.div>
         <Box
            component={motion.div}
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <ContactMethods />
         </Box>
         <Grid
            container
            columnSpacing={mdWidth ? 0 : 5}
            rowSpacing={mdWidth ? 5 : 0}
         >
            <Grid
               item xs={12} sm={12} md={6} lg={6} xl={6}
               sx={theme => ({
                  [theme.breakpoints.down('md')]: {
                     padding: '0 1rem'
                  }
               })}
            >
               <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.3 }}
                  viewport={{ once: true }}
               >
                  <ContactForm />
               </motion.div>
            </Grid>
            <Grid
               component={motion.div}
               initial={{ opacity: 0, x: 60 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.3 }}
               viewport={{ once: true }}
               item xs={12} sm={12} md={6} lg={6} xl={6}
               sx={theme => ({
                  [theme.breakpoints.down('md')]: {
                     height: '440px',
                     padding: '0 1rem'
                  }
               })}
            >
               <GoogleMap />
            </Grid>
         </Grid>
      </Box >
   );
};

export default Contact;