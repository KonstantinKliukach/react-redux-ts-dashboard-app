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

const StyledInput = styled.input`
  box-sizing:border-box;
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

// eslint-disable-next-line max-len
export interface IFormField {
  label: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClear: () => void;
  value: string;
  width?: string;
}

const FormField: React.FC<IFormField> = ({ label, name, width = '685px', onClear, ...rest }) => (
  <FormFieldContainer width={width}>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <InputContainer>
      <StyledInput name={name} {...rest} />
      <StyledCrossButton onClick={onClear} />
    </InputContainer>
  </FormFieldContainer>
);

export default FormField;
