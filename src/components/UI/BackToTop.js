import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { HiChevronDoubleUp } from "react-icons/hi";
import Zoom from '@mui/material/Zoom';
import { useTheme, useMediaQuery } from '@mui/material';
import { uiContext } from '../../context/ui-context';

const BackToTop = () => {
   const [visible, setVisible] = useState(false);
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.pageYOffset > 100) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      });
   }, []);

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   return (
      <Zoom in={visible}>
         <Box
            onClick={handleClick}
            sx={{
               position: 'fixed',
               bottom: mdWidth ? 20 : 30,
               right: mdWidth ? 20 : 30,
               zIndex: 999
            }}
         >
            <Fab
               sx={{
                  backgroundColor: darkMode ? '#5442af' : '#784cfb',
                  color: darkMode ? '#bdb5e3' : '#fff',
                  '&:hover': {
                     backgroundColor: darkMode ? '#5442af' : '#784cfb'
                  }
               }}
               size="medium">
               <HiChevronDoubleUp style={{ fontSize: '1.75rem' }} />
            </Fab>
         </Box>
      </Zoom>
   );
}

export default BackToTop;