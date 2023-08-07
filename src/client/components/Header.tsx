import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 50px;
    width: 100%;
    background: #cfcfcf;
    display: flex;
    align-items: center;
`;

const HeaderText = styled.div`
    width: 100%;
    text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
        <HeaderText>PIGGIS</HeaderText>
    </HeaderContainer>
  );
}

export default Header;