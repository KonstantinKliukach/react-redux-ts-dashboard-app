import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as ReactLogo } from 'assets/icons/logo/logo.svg';

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const rotate = keyframes`
  0 {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinningLogo = styled(ReactLogo)`
  width: 60px;
  height: 60px;
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

const Backdrop: React.FC = () => (
  <Container>
    <SpinningLogo />
  </Container>
);

export default Backdrop;
