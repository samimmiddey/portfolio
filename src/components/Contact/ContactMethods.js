import { Box } from '@mui/material';
import React from 'react';
import ContactMethodCard from '../UI/ContactMethodCard';
import email from '../../assets/contact/email.png';
import whatsapp from '../../assets/contact/whatsapp.png';
import messenger from '../../assets/contact/messenger.png';

const methods = [
   {
      name: 'Email',
      icon: email,
      link: 'mailto:samimmiddey@gmail.com'
   },
   {
      name: 'Messenger',
      icon: messenger,
      link: 'https://m.me/middeysamim'
   },
   {
      name: 'Whatsapp',
      icon: whatsapp,
      link: 'https://wa.me/919051461078'
   }
];

const ContactMethods = () => {
   return (
      <Box
         sx={theme => ({
            display: 'flex',
            columnGap: '20px',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
               padding: '0 1rem'
            },
            [theme.breakpoints.down('sm')]: {
               flexDirection: 'column',
               rowGap: '20px',
               columnGap: 0
            }
         })}
      >
         {methods.map((method, index) => (
            <ContactMethodCard
               data={method}
               key={index}
            />
         ))}
      </Box>
   );
};

export default ContactMethods;