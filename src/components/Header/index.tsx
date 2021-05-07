import Logo from 'components/Logo';
import UserMenu from 'components/UserMenu';
import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
`;

const Header: React.FC = () => (
  <StyledHeader>
    <Logo />
    <UserMenu />
  </StyledHeader>
);

export default Header;
