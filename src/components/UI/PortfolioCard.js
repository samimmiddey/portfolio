import React, { useContext } from 'react';
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Tilt from 'react-parallax-tilt';
import { uiContext } from '../context/ui-context';

const PortfolioCard = ({ details }) => {
   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Tilt
         tiltMaxAngleX={15}
         tiltMaxAngleY={15}
      >
         <Card
            elevation={0}
            // sx={{maxWidth: '350px'}}
            sx={{
               backgroundColor: darkMode ? '#2a2541' : '#fff',
               transition: '0.3s ease',
               border: darkMode ? '1px solid #2a2541' : '1px solid #fff',
               boxShadow: darkMode ? '0 0 5px 0px rgba(122, 107, 199, 0.75)' : '0 0 10px 0px rgba(120, 76, 251, 0.3)',
               '&:hover': {
                  boxShadow: darkMode ? '0 0 20px 0px #5442af' : '0 0 20px 0px #784cfb'
               }
            }}
         >
            <img
               src={darkMode ? details.imgDark : details.img}
               alt=""
               style={{
                  maxHeight: '200px',
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain'
               }}
            />
            <CardContent
               sx={{
                  paddingBottom: 0
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '10px'
                  }}
               >
                  <Typography
                     variant='h6'
                     sx={{
                        fontWeight: 700,
                        color: 'text.primary'
                     }}
                  >
                     {details.title}
                  </Typography>
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
                     {details.description}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     mt: 2,
                     display: 'flex',
                     columnGap: '10px'
                  }}
               >
                  <a href={details.git} target='_blank' rel="noreferrer">
                     <Button
                        size={smWidth ? 'small' : 'medium'}
                        disableElevation
                        variant='outlined'
                        sx={{
                           textTransform: 'none',
                           transition: '300ms ease',
                           border: darkMode && '1px solid #5442af',
                           color: darkMode && '#8d85b9',
                           '&:hover': {
                              backgroundColor: darkMode ? '#5442af' : '#784cfb',
                              color: '#fff'
                           }
                        }}
                     >
                        Code
                        <GitHubIcon sx={{ marginLeft: '8px', fontSize: '1.25rem' }} />
                     </Button>
                  </a>
                  <a href={details.demo} target='_blank' rel="noreferrer">
                     <Button
                        size={smWidth ? 'small' : 'medium'}
                        disableElevation
                        variant='outlined'
                        sx={{
                           textTransform: 'none',
                           transition: '300ms ease',
                           border: darkMode && '1px solid #5442af',
                           color: darkMode && '#8d85b9',
                           '&:hover': {
                              backgroundColor: darkMode ? '#5442af' : '#784cfb',
                              color: '#fff'
                           }
                        }}
                     >
                        Demo
                        <VisibilityOutlinedIcon sx={{ marginLeft: '8px', fontSize: '1.25rem' }} />
                     </Button>
                  </a>
               </Box>
            </CardContent>
         </Card>
      </Tilt>
   );
};

export default PortfolioCard;