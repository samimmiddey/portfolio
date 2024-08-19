import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const cardStyle = {
   backgroundColor: 'bg.card',
   transition: '0.3s ease',
   border: '1px solid transparent',
   borderColor: 'primary.main',
   height: '100%'
};

const imgStyle = {
   height: '100%',
   width: '100%',
   objectFit: 'contain'
};

const contentContainerStyle = {
   display: 'flex',
   flexDirection: 'column',
   gap: '10px'
};

const titleStyle = theme => ({
   fontWeight: 700,
   color: 'text.primary',
   fontFamily: 'primary.font',
   fontSize: '1.35rem',
   [theme.breakpoints.down('xl')]: {
      fontSize: '1.15rem'
   }
});

const descStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   fontSize: '15px',
   linHeight: 1.6,
   [theme.breakpoints.down('xl')]: {
      fontSize: '13px'
   }
});

const iconBtnStyle = {
   textTransform: 'none',
   border: '1px solid transparent',
   borderColor: 'primary.main',
   color: 'primary.main',
   '&:hover': {
      border: '1px solid transparent',
      borderColor: 'primary.main',
      color: 'primary.main'
   }
};

const btnContainerStyle = {
   mt: 2,
   display: 'flex',
   gap: '10px'
};

const imgContainerStyle = theme => ({
   backgroundColor: 'bg.secondary',
   height: '180px',
   padding: '1rem',
   [theme.breakpoints.down('xl')]: {
      height: '150px'
   },
   [theme.breakpoints.down('md')]: {
      height: '180px'
   }
});

const PortfolioCard = ({ details }) => {
   return (
      <Tilt
         tiltMaxAngleX={15}
         tiltMaxAngleY={15}
         style={{ height: '100%' }}
      >
         <Card elevation={0} sx={cardStyle}>
            <Box sx={imgContainerStyle}>
               <img
                  src={details.img}
                  alt=""
                  style={imgStyle}
               />
            </Box>
            <CardContent sx={{ '&:last-child': { paddingBottom: '20px' } }}>
               <Box sx={contentContainerStyle}>
                  <Typography variant='h6' sx={titleStyle}>
                     {details.title}
                  </Typography>
                  <Typography sx={descStyle}>
                     {details.description}
                  </Typography>
               </Box>
               <Box sx={btnContainerStyle}>
                  <a href={details.git} target='_blank' rel="noreferrer">
                     <Tooltip placement='bottom' title='GitHub'>
                        <IconButton
                           variant='outlined'
                           size='small'
                           sx={iconBtnStyle}
                        >
                           <FaGithub style={{ fontSize: '1.25rem' }} />
                        </IconButton>
                     </Tooltip>
                  </a>
                  <a href={details.demo} target='_blank' rel="noreferrer">
                     <Tooltip placement='bottom' title='Demo'>
                        <IconButton
                           variant='outlined'
                           size='small'
                           sx={iconBtnStyle}
                        >
                           <FiEye style={{ fontSize: '1.25rem' }} />
                        </IconButton>
                     </Tooltip>
                  </a>
               </Box>
            </CardContent>
         </Card>
      </Tilt>
   );
};

export default PortfolioCard;