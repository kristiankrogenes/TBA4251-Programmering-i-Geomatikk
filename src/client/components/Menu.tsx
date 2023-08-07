import React from 'react';
import styled from 'styled-components';

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
  return (
    <MenuContainer>
        <HeaderText>PIGGIS</HeaderText>
    </MenuContainer>
  );
}

export default Menu;