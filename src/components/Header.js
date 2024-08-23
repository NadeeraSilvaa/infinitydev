// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa'; // FontAwesome for the menu icon

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Toggle visibility
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer as={motion.div} initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring' }}>
      <MenuButton onClick={toggleMenu}>
        <FaBars />
      </MenuButton>
      <Logo>Infinity Developments</Logo>
      <Nav isOpen={menuOpen}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
