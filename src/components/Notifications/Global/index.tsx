import React, { useRef, useState } from 'react';
import Title from 'components/Title';
import FormField from 'components/FormField';
import FormTextArea from 'components/FormTextArea';

import { ReactComponent as ReactUpload } from 'assets/icons/upload/upload.svg';

import styled from 'styled-components';
import Button from 'components/Button';
import SimpleButton from 'components/SimpleButton';
import Preview from '../Preview';

const StyledFormField = styled(FormField)`
  margin-bottom: 22px;
`;

const StyledFormTextArea = styled(FormTextArea)`
  margin-bottom: 22px;
`;

const StyledButton = styled(Button)`
  margin-left: 25px;
`;

const StyledSimpleButton = styled(SimpleButton)`
  margin-left: 79px;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 64px;
`;

const SubmitBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 205px;
  height: 62px;
  margin-left: 43px;
`;

const StyledP = styled.p`
  color: ${(props) => props.theme.colors.secondary.stat};
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-style: italic;
  line-height: 18px;
  padding: 0;
  margin: 0;
`;

const StyledUploader = styled.input`
  visibility: hidden;
  position: absolute;
`;

export interface IPush {
  name: string,
  text: string,
  picture: string,
}

const Global: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [push, setPush] = useState<IPush>({
    name: '',
    text: '',
    picture: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPush({
      ...push,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = (name: keyof IPush) => {
    setPush({
      ...push,
      [name]: '',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleUploadChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setPush({
        ...push,
        picture: URL.createObjectURL(img),
      });
    }
  };

  const validateForm = (): boolean => Boolean(!push.name || !push.picture || !push.text);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledUploader type="file" accept="image/png" ref={inputRef} onChange={handleUploadChange} />
      <Title>????????????????????</Title>
      <StyledFormField
        name="name"
        value={push.name}
        onChange={handleChange}
        label="???????????????? ??????????????????????"
        placeholder="?????????????? ?????????? ??????????????????"
        onClear={() => handleClear('name')}
      />
      <StyledFormTextArea
        name="text"
        value={push.text}
        onChange={handleChange}
        label="?????????? ??????????????????????"
        placeholder="?????????????? ?????????? ??????????????????????"
        onClear={() => handleClear('text')}
      />
      <StyledDiv>
        <FormField
          width={'503px'}
          name="picture"
          value={push.picture}
          onChange={handleChange}
          label="???????????????????? ??????????????????????"
          placeholder="?????????????? ???????????? ???????????? ???? ??????????????????????"
          onClear={() => handleClear('picture')}
        />
        <StyledButton text={'??????????'} onClick={handleUploadClick}>
          <ReactUpload />
        </StyledButton>
        <TextContainer>
          <StyledP>
            ???????????? ?? ?????????????? ????????????????????
          </StyledP>
          <StyledP>
            512??512 px; 32-?????????????????? PNG
          </StyledP>
        </TextContainer>
      </StyledDiv>
      <SubmitBlock>
        <Preview push={push}/>
        <StyledSimpleButton text={'??????????????????????'} onClick={handleUploadClick} disabled={validateForm()} type={'submit'} />
      </SubmitBlock>
    </StyledForm>
  );
};

export default Global;
