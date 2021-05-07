import React from 'react';
import styled from 'styled-components';

interface UserAvatar {
  avatar: string;
}

const AvatarPlaceHolder = styled.div`
  background-color: #EEF1FA;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  background-color: #EEF1FA;
  width: 50px;
  height: 50px;
`;

const UserAvatar:React.FC<UserAvatar> = ({ avatar }) => {
  if (!avatar) {
    return <AvatarPlaceHolder />;
  }
  return (
    <AvatarImage src={avatar} alt="аватар пользователя" />
  );
};

export default UserAvatar;
