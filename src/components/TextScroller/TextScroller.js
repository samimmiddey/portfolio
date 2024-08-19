import React, { Fragment, useContext } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import shape from '../../assets/shape.png';
import shapeDark from '../../assets/shapeDark.png';
import { uiContext } from '../../context/ui-context';

const textContainerStyle = {
   display: 'flex',
   alignItems: 'center',
   width: '100%'
};

const text = ['UI/UX Designer', 'Web Designer', 'Front-end Developer', 'React.JS Developer', 'Next.JS Developer'];

const TextScroller = () => {
   const { darkMode } = useContext(uiContext);

   return (
      <Box
         sx={theme => ({
            padding: '1rem 0',
            backgroundColor: darkMode ? '#32255b' : 'secondary.main',
            [theme.breakpoints.down('xl')]: {
               padding: '0.8rem 0'
            }
         })}
      >
         <Swiper
            slidesPerView='auto'
            loop={true}
            modules={[Autoplay]}
            className="mySwiper text-scroller-swiper"
            speed={35000}
            autoplay={{
               delay: 0,
               disableOnInteraction: false
            }}
         >
            {
               new Array(3).fill(1).map((arrItem, i) => (
                  <SwiperSlide key={i}>
                     <Box sx={textContainerStyle}>
                        {
                           text.map((item, index) => (
                              <Fragment key={index}>
                                 <div>
                                    <Typography
                                       sx={theme => ({
                                          fontSize: '2rem',
                                          fontWeight: 800,
                                          fontFamily: 'primary.font',
                                          color: darkMode ? 'text.primary' : '#fff',
                                          textTransform: 'uppercase',
                                          padding: '0 3rem',
                                          [theme.breakpoints.down('xl')]: {
                                             fontSize: '1.75rem',
                                             padding: '0 2.5rem'
                                          },
                                          [theme.breakpoints.down('lg')]: {
                                             fontSize: '1.5rem',
                                             padding: '0 2.25rem'
                                          },
                                          [theme.breakpoints.down('md')]: {
                                             fontSize: '1.35rem',
                                             padding: '0 2rem'
                                          },
                                          [theme.breakpoints.down('sm')]: {
                                             padding: '0 1.5rem'
                                          },
                                       })}
                                    >
                                       {item}
                                    </Typography>
                                 </div>
                                 <img src={darkMode ? shapeDark : shape} alt="" className='scroller-icon' />
                              </Fragment>
                           ))
                        }
                     </Box>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </Box>
   );
};

export default TextScroller;