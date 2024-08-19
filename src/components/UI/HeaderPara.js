import React from 'react';
import Typography from '@mui/material/Typography';

const textStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   textAlign: 'center',
   fontSize: '16px',
   width: '65%',
   lineHeight: 1.8,
   [theme.breakpoints.down('xl')]: {
      fontSize: '14px'
   },
   [theme.breakpoints.down('lg')]: {
      width: '75%'
   },
   [theme.breakpoints.down(768)]: {
      width: '100%'
   }
});

const HeaderPara = ({ text }) => {
   return (
      <Typography sx={textStyle}>{text}</Typography>
   );
};

export default HeaderPara;