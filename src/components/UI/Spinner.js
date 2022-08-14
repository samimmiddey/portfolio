import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { uiContext } from '../context/ui-context';

const Spinner = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box className={darkMode ? 'loader-dark' : 'loader'}>
         <Box className="circle-container">
            <Box className={darkMode ? 'circle-dark' : 'circle'}></Box>
            <Box className={darkMode ? 'circle-dark' : 'circle'}></Box>
            <Box className={darkMode ? 'circle-dark' : 'circle'}></Box>
         </Box>
      </Box>
   );
};

export default Spinner;