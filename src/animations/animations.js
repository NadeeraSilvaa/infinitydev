// src/animations/animations.js
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };
  
  export const slideInFromLeft = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
  };
  
  export const slideInFromRight = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
  };
  
  export const popUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };
  
  export const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  