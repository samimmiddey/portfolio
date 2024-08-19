import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { uiContext } from '../../context/ui-context';

const btnStyle = theme => ({
   display: 'flex',
   alignItems: 'center',
   transition: '0.5s ease',
   fontSize: '14px',
   minHeight: 0,
   padding: '12px 24px',
   color: 'text.white',
   height: '48px',
   borderRadius: '50px',
   minWidth: 0,
   "&:hover": {
      backgroundPosition: 'right center'
   },
   [theme.breakpoints.down('xl')]: {
      padding: '10px 24px',
      fontSize: '13px',
      height: '42px'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      height: '40px'
   }
});

const PrimaryButton = ({ text, icon }) => {
   const { darkMode } = useContext(uiContext);

   return (
      <Button
         className={darkMode ? 'primary-button-dark' : 'primary-button'}
         disableElevation
         variant='contained'
         sx={btnStyle}
      >
         {text}{icon}
      </Button>
   );
};

export default PrimaryButton;