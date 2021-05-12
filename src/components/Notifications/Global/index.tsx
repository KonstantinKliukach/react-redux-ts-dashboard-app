import React, { useState } from 'react';
import Title from 'components/Title';
import FormField from 'components/FormField';
import FormTextArea from 'components/FormTextArea';

import { ReactComponent as ReactUpload } from 'assets/icons/upload/upload.svg';

import styled from 'styled-components';
import Button from 'components/Button';

const StyledFormField = styled(FormField)`
  width: 687px;
  margin-bottom: 22px;
`;

const StyledFormTextArea = styled(FormTextArea)`
  width: 687px;
  margin-bottom: 22px;
`;

const ShortField = styled(FormField)`
  width: 503px;
  margin-right: 25px;
  margin-bottom: 0px;
`;

const StyledForm = styled.form`

`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Global: React.FC = () => {
  const [state, setstate] = useState('');
  return (
    <StyledForm>
      <Title>Информация</Title>
      <StyledFormField
        name="name"
        label="Название уведомления"
        placeholder="Укажите текст заголовка"
      />
      <StyledFormTextArea
        name="text"
        label="Текст уведомления"
        placeholder="Введите текст уведомления"
      />
      <StyledDiv>
        <ShortField
          name="picture"
          label="Прикрепить изображение"
          placeholder="Укажите прямую ссылку на изображение"
        />
        <Button text={'Обзор'} >
          <ReactUpload />
        </Button>
      </StyledDiv>
    </StyledForm>
  );
};

export default Global;
