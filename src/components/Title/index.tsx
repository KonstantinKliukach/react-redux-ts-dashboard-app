import React from 'react';

import styled from 'styled-components';

const StyledH3 = styled.h3`
  margin: 0;
  margin-bottom: 39px;
  color: ${(props) => props.theme.colors.primary.stat};
  font-size:  20px;
  font-weight: ${(props) => props.theme.fontWeights.normal};;
`;

const Title: React.FC = ({ children }) => (
  <StyledH3>
    {children}
  </StyledH3>
);

export default Title;
