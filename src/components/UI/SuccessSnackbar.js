import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { uiContext } from '../../context/ui-context';
import { MdOutlineClose } from "react-icons/md";

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
      <div>
         <Snackbar
            ContentProps={{
               sx: {
                  background: '#469f4e',
                  margin: smWidth ? '0 0.5rem 0.5rem 0.5rem' : '0',
                  height: '100%',
                  zIndex: 999
               }
            }}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "center"
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
                     <MdOutlineClose />
                  </IconButton>
               </React.Fragment>
            }
         />
      </div>
   );
}

export default SuccessSnackbar;