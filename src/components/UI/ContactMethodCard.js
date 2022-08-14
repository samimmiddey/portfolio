import React, { useContext } from 'react';
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import { uiContext } from '../context/ui-context';

const ContactMethodCard = ({ data }) => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card
         elevation={0}
         sx={theme => ({
            padding: '1rem 0',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            alignItems: 'center',
            border: darkMode ? '1px solid #2a2541' : '1px solid #fff',
            transition: '0.3s ease',
            backgroundColor: darkMode ? '#2a2541' : '#fff',
            boxShadow: darkMode ? '0 0 5px 0px rgba(122, 107, 199, 0.75)' : '0 0 10px 0px rgba(120, 76, 251, 0.3)',
            '&:hover': {
               boxShadow: darkMode ? '0 0 20px 0px #5442af' : '0 0 20px 0px #784cfb'
            },
            [theme.breakpoints.down('md')]: {
               width: '100%'
            },
            [theme.breakpoints.down('sm')]: {
               flexDirection: 'row',
               alignItems: 'flex-start',
               columnGap: '1rem',
               rowGap: 0,
               justifyContent: 'center'
            },
            [theme.breakpoints.down(500)]: {
               justifyContent: 'flex-start',
               paddingLeft: '1rem'
            }
         })}
      >
         <img
            style={{
               height: smWidth ? '40px' : '45px',
               width: smWidth ? '40px' : '45px'
            }}
            src={data.icon}
            alt=""
         />
         <Box
            sx={theme => ({
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               rowGap: '5px',
               [theme.breakpoints.down('sm')]: {
                  alignItems: 'flex-start'
               }
            })}
         >
            <Typography
               sx={theme => ({
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: '14px',
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '13px'
                  }
               })}
            >
               {data.name}
            </Typography>
            <a
               href={data.link}
               target="_blank"
               rel="noreferrer"
            >
               <Typography
                  sx={theme => ({
                     color: darkMode ? '#8d85b9' : '#784cfb',
                     fontWeight: 500,
                     fontSize: '14px',
                     textAlign: 'center',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '13px'
                     }
                  })}
               >
                  Send a message
               </Typography>
            </a>
         </Box>
      </Card>
   );
};

export default ContactMethodCard;