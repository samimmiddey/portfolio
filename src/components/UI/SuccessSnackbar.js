import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';
import { uiContext } from '../context/ui-context';

const SuccessSnackbar = () => {
   const { showSnackbar, snackbarMessage, setShowSnackbar } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setShowSnackbar({ value: false, text: snackbarMessage });
   };

   return (
      <Box>
         <Snackbar
            ContentProps={{
               sx: {
                  background: '#784cfb',
                  margin: smWidth ? '0 0.5rem 0.5rem 0.5rem' : '0',
               }
            }}
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
            message={snackbarMessage ? snackbarMessage : undefined}
            action={
               <React.Fragment>
                  <IconButton
                     aria-label="close"
                     color="inherit"
                     sx={{ p: 0.5 }}
                     onClick={handleClose}
                  >
                     <CloseIcon />
                  </IconButton>
               </React.Fragment>
            }
         />
      </Box>
   );
}

export default SuccessSnackbar;