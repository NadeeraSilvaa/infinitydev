// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/path-to-hero-image.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to Infinity Developments
      </motion.h1>
      <motion.p initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}>
        Your trusted partner in real estate development.
      </motion.p>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Learn More
      </Button>
    </HeroContent>
  </HeroSection>
);

export default Hero;
