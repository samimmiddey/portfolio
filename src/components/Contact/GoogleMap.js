import React from 'react';
import { Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const containerStyle = {
   height: '100%',
   position: 'relative'
};

const addressBoxStyle = theme => ({
   position: 'absolute',
   top: '10px',
   left: '55px',
   padding: '1rem',
   borderRadius: '8px',
   backgroundColor: 'bg.secondary',
   zIndex: 999,
   [theme.breakpoints.down(500)]: {
      padding: '14px'
   },
   [theme.breakpoints.down(350)]: {
      top: '65%',
      left: '10px',
      padding: '12px'
   }
});

const nameStyle = theme => ({
   fontFamily: 'primary.font',
   fontWeight: 700,
   fontSize: '1.3rem',
   color: 'text.primary',
   [theme.breakpoints.down('xl')]: {
      fontSize: '1.1rem'
   }
});

const emailStyle = theme => ({
   color: 'text.secondary',
   fontWeight: 500,
   fontSize: '13px',
   marginBottom: '5px',
   [theme.breakpoints.down('xl')]: {
      fontSize: '12px'
   }
});

const addressStyle = theme => ({
   color: 'text.primary',
   fontWeight: 500,
   fontSize: '14px',
   [theme.breakpoints.down('xl')]: {
      fontSize: '13px'
   }
});

const GoogleMap = () => {
   return (
      <div style={containerStyle}>
         <Box sx={addressBoxStyle}>
            <Typography variant='h6' sx={nameStyle}>Samim Middey</Typography>
            <Typography sx={emailStyle}>samimmiddey@gmail.com</Typography>
            <Typography sx={addressStyle}>Sarenga, Sankrail, Howrah<br /> 711309, West Bengal</Typography>
         </Box>
         <Box sx={{ height: '100%' }}>
            <MapContainer center={[22.532680, 88.207040]} zoom={12}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[22.532680, 88.207040]}>
                  <Popup>I live here!</Popup>
               </Marker>
            </MapContainer>
         </Box>
      </div>
   );
};

export default GoogleMap;