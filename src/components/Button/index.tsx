import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.stat};;
  color: ${(props) => props.theme.colors.fontColors.white};
  border: none;
  border-radius: 5px;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  padding: 16px 31px;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.hover};
  };
  &:active {
    background-color: ${(props) => props.theme.colors.secondary.active};
  };
  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: #BFCBE9;
  };
`;

const StyledSpan = styled.span`
  margin-left: 23px;
`;

const IconWrapper = styled.div`
  max-height: 25px;
  svg {
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    ${StyledButton}:disabled & {
      stroke: #BFCBE9;
    };
  }
`;

interface Button {
  text: string;
}

const Button: React.FC<Button> = ({ text, children, ...rest }) => (
  <StyledButton {...rest}>
      <IconWrapper>
        {children}
      </IconWrapper>
    <StyledSpan>{text}</StyledSpan>
  </StyledButton>
);

export default Button;
