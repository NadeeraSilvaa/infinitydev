// src/components/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heroimg from '../images/Hero.jpg';

// Keyframes for the zoom-out animation
const zoomOut = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${Heroimg});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  animation: ${zoomOut} 10s ease-out forwards; /* Apply the zoom-out effect */
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display SC', serif;
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 100;
  margin-top: 80px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: #000;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the component is in view
  });

  return (
    <HeroSection ref={ref}>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          LUXURY REDEFINED<br />
          GLOBALLY
        </HeroTitle>
        
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Learn More
        </Button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
