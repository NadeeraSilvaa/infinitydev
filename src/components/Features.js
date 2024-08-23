// src/components/Features.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesSection = styled.section`
  padding: 50px 20px;
  background-color: #f8f8f8;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureItem = styled(motion.div)`
  width: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Features = () => (
  <FeaturesSection id="services">
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Our Services
    </motion.h2>
    <FeaturesGrid>
      {['Residential Development', 'Commercial Projects', 'Property Management'].map((feature, index) => (
        <FeatureItem
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <h3>{feature}</h3>
          <p>Description of {feature}.</p>
        </FeatureItem>
      ))}
    </FeaturesGrid>
  </FeaturesSection>
);

export default Features;
