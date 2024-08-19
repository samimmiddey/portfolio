import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie1.json';
import animationDataDark from '../../assets/lottieDark2.json';
import { uiContext } from '../../context/ui-context';

const HomeLottie = () => {
   const { darkMode } = useContext(uiContext);

   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: darkMode ? animationDataDark : animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      }
   };

   return (
      <>
         <Lottie options={defaultOptions} />
      </>
   );
};

export default HomeLottie;