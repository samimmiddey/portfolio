import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
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

const mapGridStyle = theme => ({
   height: '450px',
   [theme.breakpoints.down('md')]: {
      height: '400px',
   },
   [theme.breakpoints.down('sm')]: {
      height: '350px',
   }
});

const Contact = () => {
   return (
      <Box
         id='contact'
         className='container section-padding section'
         sx={containerStyle}
      >
         <Box sx={headerStyle}>
            <PrimaryHeader text={<>Contact <span>Me</span></>} />
            <HeaderPara
               text='Whether you have a project in mind, a question, or any inquiries, feel free to reach out at your convenience. I’m always open to new opportunities and collaborations'
            />
         </Box>
         <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
               <ContactForm />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={mapGridStyle}>
               <GoogleMap />
            </Grid>
         </Grid>
      </Box>
   );
};

export default Contact;