import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PortfolioCard from '../UI/PortfolioCard';
import { motion } from 'framer-motion';
import PrimaryHeader from '../UI/PrimaryHeader';
import HeaderPara from '../UI/HeaderPara';
import img1 from '../../assets/projects/img-1.png';
import img2 from '../../assets/projects/img-2.png';
import img3 from '../../assets/projects/img-3.png';
import img4 from '../../assets/projects/img-4.png';
import img5 from '../../assets/projects/img-5.png';
import img6 from '../../assets/projects/img-6.png';
import img7 from '../../assets/projects/img-7.png';

const containerStyle = theme => ({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '2.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '2.25rem'
   },
   [theme.breakpoints.down('md')]: {
      rowGap: '2rem'
   }
});

const headerStyle = theme => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   rowGap: '1.5rem',
   [theme.breakpoints.down('xl')]: {
      rowGap: '1.25rem'
   },
   [theme.breakpoints.down('sm')]: {
      rowGap: '1rem'
   }
});

const btnContainerStyle = theme => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '1rem',
   flexWrap: 'wrap',
   [theme.breakpoints.down('xl')]: {
      gap: '10px'
   }
});

const buttonText = ['All', 'UI/UX', 'Front End', 'Full Stack'];

const projects = [
   {
      img: img1,
      title: 'Inspire',
      categories: ['FULL STACK', 'ALL'],
      description: 'Inspire is a full-stack social media app built using Next.js & MUI!',
      demo: 'https://inspire-app.vercel.app',
      git: 'https://github.com/samimmiddey/inspire-frontend'
   },
   {
      img: img2,
      title: 'Shopcult',
      categories: ['FULL STACK', 'ALL'],
      description: 'Shopcult is a e-commerce website built using React.js & MUI!',
      demo: 'https://shopcult.netlify.app',
      git: 'https://github.com/samimmiddey/shopcult'
   },
   {
      img: img3,
      title: 'Shopfling',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'Shopfling is an admin dashboard built using React.js & MUI!',
      demo: 'https://shopfling.netlify.app',
      git: 'https://github.com/samimmiddey/shopfling'
   },
   {
      img: img4,
      title: 'YouTube Replica',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'YouTube Replica is a YouTube clone built using Next.js & MUI!',
      demo: 'https://youtubereplica.vercel.app',
      git: 'https://github.com/samimmiddey/youtubereplica'
   },
   {
      img: img5,
      title: 'Hoobank',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'Hoobank is a landing page built using React.js & Tailwind!',
      demo: 'https://hoobankofficial.netlify.app',
      git: 'https://github.com/samimmiddey/hoobank'
   },
   {
      img: img6,
      title: 'Personal Portfolio',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A modern personal portfolio built using React.js & MUI!',
      demo: 'https://samimmiddey.netlify.app',
      git: 'https://github.com/samimmiddey/portfolio'
   },
   {
      img: img7,
      title: 'Plantex',
      categories: ['FRONT END', 'ALL', 'UI/UX'],
      description: 'A responsive landing page built with HTML, CSS, JS & Scroll Reveal!',
      demo: 'https://plantexdesign.netlify.app',
      git: 'https://github.com/samimmiddey/Plantex'
   },
];

const Portfolio = () => {
   const [category, setCategory] = useState({
      value: 'all',
      index: 0
   });

   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

   const filteredProjects = projects.filter((project) => project.categories.includes(category.value.toUpperCase()));

   return (
      <Box sx={{ backgroundColor: 'bg.secondary' }}>
         <Box
            id='portfolio'
            className='container section-padding section'
            sx={containerStyle}
         >
            <Box sx={headerStyle}>
               <PrimaryHeader text={<>My <span>Portfolio</span></>} />
               <HeaderPara
                  text='Showcasing a collection of visually stunning and technically robust websites, blending creative design with front-end expertise, demonstrating engaging user experience'
               />
               <Box sx={btnContainerStyle}>
                  {
                     buttonText.map((text, index) => (
                        <Button
                           onClick={() => {
                              setAnimateCard([{ y: 100, opacity: 0 }]);
                              setTimeout(() => {
                                 setAnimateCard([{ y: 0, opacity: 1 }]);
                                 setCategory({ value: text, index: index });
                              }, 500);
                           }}
                           key={index}
                           variant='contained'
                           disableElevation
                           sx={theme => ({
                              textTransform: 'none',
                              borderRadius: '50px',
                              backgroundColor: category.index === index ? 'secondary.main' : 'transparent',
                              border: '1px solid transparent',
                              borderColor: 'secondary.main',
                              color: category.index === index ? '#fff' : 'secondary.main',
                              '&:hover': {
                                 backgroundColor: category.index === index ? 'secondary.main' : 'transparent',
                                 border: '1px solid transparent',
                                 borderColor: 'secondary.main',
                                 color: category.index === index ? '#fff' : 'secondary.main',
                              },
                              [theme.breakpoints.down('xl')]: {
                                 height: '36px',
                                 fontSize: '13px'
                              }
                           })}
                        >
                           {text}
                        </Button>
                     ))
                  }
               </Box>
            </Box>
            <Grid
               component={motion.div}
               animate={animateCard}
               transition={{ duration: 0.5, delayChildren: 0.5, ease: 'easeInOut' }}
               container
               spacing={{ xs: 2.5, xl: 3 }}
               sx={{ display: 'flex', justifyContent: 'center' }}
            >
               {
                  filteredProjects.map((project, index) => (
                     <Grid
                        item
                        key={index}
                        xs={12} sm={6} md={4} lg={3}
                     >
                        <PortfolioCard
                           key={index}
                           details={project}
                        />
                     </Grid>
                  ))
               }
            </Grid>
         </Box >
      </Box>
   );
};

export default Portfolio;