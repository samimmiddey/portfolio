import React from 'react';
import Typography from '@mui/material/Typography';

const textStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '1.8',
   [theme.breakpoints.down('xl')]: {
      fontSize: '14px'
   }
});

const PrimaryPara = ({ text }) => {
   return (
      <Typography sx={textStyle}>{text}</Typography>
   );
};

export default PrimaryPara;