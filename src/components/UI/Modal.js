import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { uiContext } from '../context/ui-context';
import { Button } from '@mui/material';

const creditDetails = [
   {
      link: <a href="https://www.freepik.com/vectors/website-menu">Website menu vector created by storyset - www.freepik.com</a>
   },
   {
      link: <a href="https://www.freepik.com/vectors/social-media-management">Social media management vector created by storyset - www.freepik.com</a>
   },
   {
      link: <a href="https://www.freepik.com/vectors/ui-designer">Ui designer vector created by storyset - www.freepik.com</a>
   },
];

const CreditModal = () => {
   const { showModal, toggleModal, darkMode } = useContext(uiContext);

   if (showModal) {
      document.body.classList.add('correction');
   } else {
      document.body.classList.remove('corerction');
   }

   const handleClose = () => {
      toggleModal();
   }

   return (
      <Modal
         open={showModal}
         onClose={handleClose}
         sx={{ zIndex: 999999 }}
      >
         <Box sx={theme => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '425px',
            overflowY: 'auto',
            bgcolor: darkMode ? '#292442' : '#fff',
            boxShadow: 24,
            padding: '2rem',
            borderRadius: '10px',
            [theme.breakpoints.down('md')]: {
               maxHeight: '300px',
               maxWidth: '500px'
            },
            [theme.breakpoints.down('sm')]: {
               maxHeight: '300px',
               maxWidth: '400px',
               padding: '1.5rem 1.25rem',
            },
            [theme.breakpoints.down(500)]: {
               maxWidth: '350px'
            },
            [theme.breakpoints.down(400)]: {
               maxWidth: '300px'
            },
            [theme.breakpoints.down(350)]: {
               maxWidth: '250px'
            }
         })}>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  rowGap: '1rem'
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     variant='h4'
                     sx={theme => ({
                        fontWeight: 500,
                        color: 'text.primary',
                        fontFamily: 'Abril Fatface',
                        letterSpacing: 1,
                        [theme.breakpoints.down('xl')]: {
                           fontSize: '2rem'
                        },
                        [theme.breakpoints.down('lg')]: {
                           fontSize: '1.75rem'
                        },
                        [theme.breakpoints.down('md')]: {
                           fontSize: '1.5rem'
                        }
                     })}
                  >
                     Credits
                  </Typography>
                  <Box
                     sx={{
                        height: '4px',
                        width: '65%',
                        backgroundColor: darkMode ? '#5442af' : '#784cfb',
                        marginTop: '12px',
                        borderRadius: '10px'
                     }}
                  />
               </Box>
               <Box>
                  <Typography
                     sx={theme => ({
                        color: 'text.secondary',
                        fontWeight: 500,
                        textAlign: 'center',
                        fontSize: '16px',
                        [theme.breakpoints.down('lg')]: {
                           fontSize: '15px'
                        },
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '14px'
                        }
                     })}
                  >
                     All credits belong to the respective authors
                  </Typography>
               </Box>
            </Box>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginTop: '2rem',
                  rowGap: '1rem'
               }}
            >
               {creditDetails.map((item, index) => (
                  <Typography
                     key={index}
                     sx={{ color: 'text.secondary' }}
                  >
                     <span style={{ fontSize: '14px' }}>Link {index + 1}</span><span style={{ margin: '0 10px' }}>:</span><span style={{ fontSize: '14px' }}>{item.link}</span>
                  </Typography>
               ))}
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
               <Button
                  disableElevation
                  onClick={handleClose}
                  variant='contained'
                  size='small'
                  sx={{
                     minWidth: 0,
                     minHeight: 0,
                     padding: '5px 20px',
                     backgroundColor: darkMode ? '#5442af' : '#784cfb'
                  }}
               >
                  Close
               </Button>
            </Box>
         </Box>
      </Modal>
   );
}

export default CreditModal;
