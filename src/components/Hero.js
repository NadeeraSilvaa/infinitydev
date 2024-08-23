// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heroimg from '../images/Hero.jpg';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${Heroimg});
  background-size: cover;
  background-position: center;
  color: #000;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
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
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Welcome to Infinity Developments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: '-50vw' }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : '-50vw' }}
          transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 120 }}
        >
          Your trusted partner in real estate development.
        </motion.p>
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
