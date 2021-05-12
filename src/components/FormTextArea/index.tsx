import { IFormField } from 'components/FormField';
import CrossButton from 'components/CrossButton';
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
  box-sizing:border-box;
  color: #97A7CF;
  font-size:  ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  border-radius: 5px;
  border: 1px solid #97A7CF;
  padding: 18px 55px 20px 18px;
  width: 100%;
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

const StyledCrossButton = styled(CrossButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

const InputContainer = styled.div`
  position: relative;
`;

interface IFormFieldContainer {
  width: string;
}

const FormFieldContainer = styled.div<IFormFieldContainer>`
  width: ${(props) => props.width};
`;

const FormTextArea: React.FC<IFormField> = ({ label, name, width = '685px', onClear, ...rest }) => (
  <FormFieldContainer width={width}>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <InputContainer>
      <StyledTextarea name={name} {...rest} rows={3}/>
      <StyledCrossButton onClick={onClear} />
    </InputContainer>
  </FormFieldContainer>
);

export default FormTextArea;
