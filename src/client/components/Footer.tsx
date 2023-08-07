import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #cfcfcf;
    display: flex;
    align-items: center;
`;

const FooterText = styled.div`
    width: 100%;
    text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>TBA4251 - Programmering i Geomatikk 2023</FooterText>
    </FooterContainer>
  );
}

export default Footer;