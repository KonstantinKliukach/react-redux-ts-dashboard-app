import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ReactCross } from 'assets/icons/cross/cross.svg';

const StyledButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  padding: 20px;
  background-color: transparent;
  z-index: 2;
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.stat};
  };
  border-radius: 5px;
`;
const CrossIcon = styled(ReactCross)`
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  stroke: #91A0C9;
  ${StyledButton}:disabled & {
    stroke: #BFCBE9;
  };
  ${StyledButton}:active & {
    stroke: ${(props) => props.theme.colors.secondary.active};
  };
  ${StyledButton}:hover & {
    stroke:  ${(props) => props.theme.colors.primary.stat};
  };
`;

interface ICrossButton {
  onClick: () => void
}
const CrossButton: React.FC<ICrossButton> = ({ ...rest }) => (
  <StyledButton {...rest} type="button">
    <CrossIcon />
  </StyledButton>
);

export default CrossButton;
