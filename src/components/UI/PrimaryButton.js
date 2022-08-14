import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { uiContext } from '../context/ui-context';

const PrimaryButton = ({ text, height, icon }) => {
   const { darkMode } = useContext(uiContext);

   return (
      <Button
         className={darkMode ? 'primary-button-dark' : 'primary-button'}
         disableElevation
         variant='contained'
         sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            transition: '0.5s',
            fontSize: '13px',
            minHeight: 0,
            color: darkMode ? '#bdb5e3' : '#fff',
            height: `${height}`,
            "&:hover": {
               backgroundPosition: 'right center'
            },
            [theme.breakpoints.down('sm')]: {
               fontSize: '12px'
            }
         })}
      >
         {text}
         {icon}
      </Button>
   );
};

export default PrimaryButton;