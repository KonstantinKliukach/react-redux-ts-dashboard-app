import Aside from 'components/Aside';
import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1134px);
  grid-template-rows: max-content auto;
  grid-template-areas:
    "header  header"
    "aside main"
`;

const StyledMain = styled.main`
  grid-area: main;
`;

const MainLayout: React.FC = ({ children }) => (
  <StyledDiv>
    <Header />
    <Aside />
    <StyledMain>
      {children}
    </StyledMain>
  </StyledDiv>
);

export default MainLayout;
