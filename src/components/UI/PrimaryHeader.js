import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { uiContext } from '../../context/ui-context';

const textStyle = theme => ({
   fontWeight: 800,
   color: 'text.primary',
   fontFamily: 'primary.font',
   letterSpacing: 1,
   fontSize: '3rem',
   [theme.breakpoints.down('xl')]: {
      fontSize: '2.5rem'
   },
   [theme.breakpoints.down('lg')]: {
      fontSize: '2.25rem'
   },
   [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
   },
   [theme.breakpoints.down(380)]: {
      fontSize: '1.75rem'
   }
});

const PrimaryHeader = ({ text }) => {
   const { darkMode } = useContext(uiContext);

   return (
      <Typography
         variant='h2'
         sx={textStyle}
         className={`bottom-bar ${darkMode ? 'bottom-bar-dark' : 'bottom-bar-light'}`}
      >
         {text}
      </Typography>
   );
};

export default PrimaryHeader;