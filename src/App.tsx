import React from 'react';
import styled from 'styled-components';
import Menu from './client/components/Menu';
import MapComponent from './client/components/MapComponent/MapComponent';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 5;
`;

function App() {
  return (
    <MainContainer>
      <MenuContainer><Menu /></MenuContainer>
      <MapContainer><MapComponent /></MapContainer>
    </MainContainer>
  );
}

export default App;
