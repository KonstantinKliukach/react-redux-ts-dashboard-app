import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary.stat};;
  color: ${(props) => props.theme.colors.fontColors.white};
  border: none;
  border-radius: 5px;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  padding: 18px 65px;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.hover};
  };
  &:active {
    background-color: ${(props) => props.theme.colors.primary.active};
  };
  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: #BFCBE9;
  };
`;

interface SimpleButton {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'
}

const SimpleButton: React.FC<SimpleButton> = ({ text, ...rest }) => (
  <StyledButton {...rest} >
    {text}
  </StyledButton>
);

export default SimpleButton;
