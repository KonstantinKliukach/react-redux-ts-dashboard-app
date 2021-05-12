import React from 'react';
import styled, { keyframes } from 'styled-components';
import preview from 'assets/images/preview.png';
import { IPush } from '../Global';

interface Preview {
  push: IPush
}

const PreviewContainer = styled.div`
  box-sizing: border-box;
  background-image: url(${preview});
  background-size: cover;
  width: 450px;
  height: 175px;
  padding: 63px 29px 16px 29px;
`;

const PushContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  position: relative;
`;

interface WithImage {
  picture: string;
}

const TextContainer = styled.div<WithImage>`
  transition: all 0.3s ease-out;
  margin-left: ${(props) => (props.picture ? '80px' : '0px')};
  min-height: 64px;
`;

const PushHeader = styled.h3`
  white-space: pre-line;
  overflow-wrap: anywhere;
  margin: 0;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.fontColors.secondary};
  font-size:  20px;
  font-weight: ${(props) => props.theme.fontWeights.normal};;
`;

const PushText = styled.p`
  white-space: pre-line;
  overflow-wrap: anywhere;
  margin: 0;
  color: ${(props) => props.theme.colors.fontColors.main};
  font-size:  12px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 7px;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  object-fit: scale-down;
  background-color: #EEF1FA;
  position: absolute;
  left: 16px;
  top: 16px;
`;

const Preview: React.FC<Preview> = ({ push }) => (
  <PreviewContainer>
    <PushContainer>
      { push.picture && <StyledImage src={push.picture} alt="Push preview"/>}
      <TextContainer picture={push.picture}>
        <PushHeader>{push.name || 'Укажите текст заголовка'}</PushHeader>
        <PushText>{push.text || 'Ведите текст уведомления'}</PushText>
      </TextContainer>
    </PushContainer>
  </PreviewContainer>
);

export default Preview;
