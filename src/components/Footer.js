// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Infinity Developments. All rights reserved.</p>
    <p>Contact us at: info@infinitydevelopments.ae</p>
  </FooterContainer>
);

export default Footer;
