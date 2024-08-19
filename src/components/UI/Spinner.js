import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { uiContext } from '../../context/ui-context';
import PuffLoader from 'react-spinners/PuffLoader';

const Spinner = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box className={darkMode ? 'loader-dark' : 'loader'}>
         <Box className="circle-container">
            <PuffLoader color={darkMode ? '#a49ec7' : '#784cfb'} />
         </Box>
      </Box>
   );
};

export default Spinner;