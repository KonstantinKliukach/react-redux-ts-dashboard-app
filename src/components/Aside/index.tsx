import MainMenu from 'components/MainMenu';
import React from 'react';
import styled from 'styled-components';

const StyleAside = styled.aside`
  grid-area: aside;
`;

const Aside: React.FC = () => (
  <StyleAside>
    <MainMenu />
  </StyleAside>
);

export default Aside;
