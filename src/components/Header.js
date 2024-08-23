// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars , FaEnvelope } from 'react-icons/fa';
import LogoImage from '../images/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #000;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding: 10px;
  }
`;

const Logo = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 50px; /* Adjust this value based on your design */
    @media (max-width: 768px) {
      height: 40px; /* Adjust this value for smaller screens */
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 10; /* Ensure button stays above the overlay */
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
//   background-image: url('https://png.pngtree.com/png-clipart/20210204/ourmid/pngtree-black-and-white-building-city-clipart-background-png-image_2882431.jpg'); /* Add your background image here */
  background-size: cover;
  background-position: center;
  background-color:#000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9; /* Make sure it's behind the menu button */
`;

const OverlayContent = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ContactButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius:20px;
  color: #fff;
  background: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const SquareButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <HeaderContainer as={motion.div} initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring' }}>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        <Logo>
        <img src={LogoImage} alt="Infinity Developments Logo" />
        </Logo>
        <ButtonContainer>
        <ContactButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaEnvelope style={{ marginRight: '10px' }} />
          Contact Us
        </ContactButton>
        <SquareButton whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          +
        </SquareButton>
      </ButtonContainer>
      </HeaderContainer>

      <Overlay
        initial={{ scaleX: 0 }}
        animate={{ scaleX: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ transformOrigin: 'left' }} // Left-to-right collapse effect
      >
        <OverlayContent>
          <h1>Menu</h1>
          <p>This is the new page or menu content.</p>
          <button onClick={toggleMenu}>Close Menu</button>
        </OverlayContent>
      </Overlay>
    </>
  );
};

export default Header;
