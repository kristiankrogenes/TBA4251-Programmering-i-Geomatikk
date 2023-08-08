import React from 'react';
import styled from 'styled-components';
import GeoJSONUploader from '../services/GeoJSONUploader';

const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    background: #cfcfcf;
`;

const HeaderText = styled.div`
    width: 100%;
    text-align: center;
`;

function Menu() {

  const handleUpload = (geojsonData: any) => {
    // Do something with the uploaded GeoJSON data
    console.log('Uploaded GeoJSON data:', geojsonData);
  };

  return (
    <MenuContainer>
      <HeaderText>PIGGIS</HeaderText>
      <GeoJSONUploader onUpload={handleUpload} />
    </MenuContainer>
  );
}

export default Menu;