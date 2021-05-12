import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin: 0;
  pointer-events: none;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.fontColors.secondary};
  font-size:  ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  display: block;
`;

const StyledInput = styled.input`
  color: #97A7CF;
  font-size:  ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  border-radius: 5px;
  border: 1px solid #97A7CF;
  padding: 19px 55px 20px 19px;
  width: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  ::placeholder {
    color: #97A7CF;
    font-size:  ${(props) => props.theme.fontSizes.small};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  };
  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.fontColors.main};
  }
`;

// eslint-disable-next-line max-len
interface FormField {
  label: string;
  name: string;
  placeholder: string;
}

const FormField: React.FC<FormField> = ({ label, name, ...rest }) => (
  <div>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput name={name} {...rest} />
  </div>
);

export default FormField;
