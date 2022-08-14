import React, { useEffect, useRef, useState, useContext } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import john from '../../assets/testimonial/john.jpg';
import sarah from '../../assets/testimonial/sarah.jpg';
import michael from '../../assets/testimonial/michael.jpg';
import brad from '../../assets/testimonial/brad.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TestimonialCard from '../UI/TestimonialCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';
import { uiContext } from '../context/ui-context';

const testimonials = [
   {
      name: 'John Wu',
      img: john,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'CEO & Founder at Apple'
   },
   {
      name: 'Sarah Williams',
      img: sarah,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'UI/UX Designer at Amazon'
   },
   {
      name: 'Michael Sanders',
      img: michael,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'Senior Developer at Netflix'
   },
   {
      name: 'Brad Traversy',
      img: brad,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'CEO & Founder at Traversy Media'
   },
];

const Testimonial = () => {
   const { darkMode } = useContext(uiContext);
   const [swiper, setSwiper] = useState();
   const prevRef = useRef();
   const nextRef = useRef();

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   useEffect(() => {
      if (swiper) {
         swiper.params.navigation.prevEl = prevRef.current;
         swiper.params.navigation.nextEl = nextRef.current;
         swiper.navigation.init();
         swiper.navigation.update();
      }
   }, [swiper]);

   return (
      <Box
         id='service'
         sx={{
            backgroundColor: darkMode ? '#211d35' : '#f8f6fe'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               paddingTop: '8rem',
               paddingBottom: '168px',
               display: 'flex',
               flexDirection: 'column',
               rowGap: '3rem',
               [theme.breakpoints.down('xl')]: {
                  paddingTop: '7rem',
                  paddingBottom: '152px',
                  rowGap: '2.75rem'
               },
               [theme.breakpoints.down('lg')]: {
                  paddingTop: '6rem',
                  paddingBottom: '136px',
                  rowGap: '2.5rem'
               },
               [theme.breakpoints.down('md')]: {
                  paddingTop: '5rem',
                  paddingBottom: '110px',
                  rowGap: '2.25rem'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '4.5rem 1rem 102px 1rem',
                  rowGap: '2rem'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  rowGap: '2rem',
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.5rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     rowGap: '1rem'
                  }
               })}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     variant='h3'
                     component={motion.h3}
                     initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     viewport={{ once: true }}
                     sx={theme => ({
                        fontWeight: 500,
                        fontFamily: 'Abril Fatface',
                        color: 'text.primary',
                        letterSpacing: 1,
                        [theme.breakpoints.down('xl')]: {
                           fontSize: '2.5rem'
                        },
                        [theme.breakpoints.down('lg')]: {
                           fontSize: '2rem'
                        },
                        [theme.breakpoints.down('md')]: {
                           fontSize: '1.75rem'
                        }
                     })}
                  >
                     Testimonials
                  </Typography>
                  <Box
                     component={motion.div}
                     initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     viewport={{ once: true }}
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
                     component={motion.h6}
                     initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     viewport={{ once: true }}
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
                     See what my clients have to say about me
                  </Typography>
               </Box>
            </Box>
            {/* Slider Box */}
            <Box
               className='swiper-container'
               component={motion.div}
               initial={{ opacity: 0, y: mdWidth ? -50 : -100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 2, ease: 'easeInOut' }}
               viewport={{ once: true }}
               sx={{
                  margin: '0 auto',
                  marginTop: '-3rem',
                  maxWidth: '960px',
                  width: '100%'
               }}
            >
               <Box
                  className='card-swiper'
               >
                  {/* Custom Buttons */}
                  <Box className='swiper-button-container'>
                     <Button
                        variant='contained'
                        disableElevation
                        className='swiper-button'
                        ref={prevRef}
                     >
                        <ArrowBackIosNewIcon sx={{ fontSize: '1.25rem', color: darkMode ? '#bdb5e3' : '#fff', }} />
                     </Button>
                     <Button
                        variant='contained'
                        disableElevation
                        className='swiper-button'
                        ref={nextRef}
                     >
                        <ArrowForwardIosIcon sx={{ fontSize: '1.25rem', color: darkMode ? '#bdb5e3' : '#fff', }} />
                     </Button>
                  </Box>
                  {/* Slides */}
                  <Swiper
                     slidesPerView={1}
                     spaceBetween={16}
                     slidesPerGroup={1}
                     loop={true}
                     navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current
                     }}
                     modules={[Navigation]}
                     className="mySwiper"
                     updateOnWindowResize
                     observer
                     observeParents
                     onSwiper={setSwiper}
                     breakpoints={{
                        250: {
                           slidesPerView: 1,
                        },
                        375: {
                           slidesPerView: 1,
                        },
                        650: {
                           slidesPerView: 1,
                        },
                        1250: {
                           slidesPerView: 1,
                        }
                     }}
                  >
                     {testimonials.map((data, index) => (
                        <SwiperSlide key={index}>
                           <TestimonialCard
                              index={index}
                              data={data}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </Box>
            </Box >
         </Box>
      </Box>
   );
};

export default Testimonial;