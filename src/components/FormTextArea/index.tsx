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

const StyledTextarea = styled.textarea`
  color: #97A7CF;
  font-size:  ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  border-radius: 5px;
  border: 1px solid #97A7CF;
  padding: 18px 55px 20px 18px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  resize: none;
  ::placeholder {
    color: #97A7CF;
    font-size:  ${(props) => props.theme.fontSizes.small};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-family: ${(props) => props.theme.fonts[1]};
  };
  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.fontColors.main};
  }
`;

// eslint-disable-next-line max-len
interface FormTextArea {
  label: string;
  name: string;
  placeholder: string;
}

const FormTextArea: React.FC<FormTextArea> = ({ label, name, ...rest }) => (
  <>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledTextarea name={name} {...rest} rows={3}/>
  </>
);

export default FormTextArea;
