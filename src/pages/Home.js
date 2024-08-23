// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { GlobalStyles, theme } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
