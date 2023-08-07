import React from 'react';
import LandingPage from './client/landing/LandingPage';
import styled from 'styled-components';
import Header from './client/components/Header';
import Footer from './client/components/Footer';

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <LandingPage />
      <Footer />
    </MainContainer>
  );
}

export default App;
