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
`;

const StyledSpan = styled.span`
  margin-left: 23px;
`;

interface Button {
  text: string;
}

const Button: React.FC<Button> = ({ text, children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
    <StyledSpan>{text}</StyledSpan>
  </StyledButton>
);

export default Button;
