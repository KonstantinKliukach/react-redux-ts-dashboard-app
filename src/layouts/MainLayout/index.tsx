import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const MainLayout: React.FC = ({ children }) => (
  <StyledDiv>
    <Header />
    {children}
  </StyledDiv>
);

export default MainLayout;
