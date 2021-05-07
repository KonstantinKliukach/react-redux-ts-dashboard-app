import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import UserAvatar from 'components/UserAvatar';
import { getAuthState } from 'context/redux/reducers/auth';

import { ReactComponent as ReactIcon } from 'assets/icons/menu_arrow/arrow.svg';

const StyledSpan = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size:  ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.fontColors.main};
`;

const UserName = styled(StyledSpan)`
  margin-right: 21px;
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  padding-top: 19px;
  padding-bottom: 19px;
`;

const StyledArrowIcon = styled(ReactIcon)`
  fill: ${(props) => props.theme.colors.primary.stat};
  transition: fill 0.25s;
  ${StyledButton}:hover & {
    fill: ${(props) => props.theme.colors.primary.hover};
  };
  ${StyledButton}:active & {
    fill: ${(props) => props.theme.colors.primary.active};
  };
  ${StyledButton}:disabled & {
    fill: ${(props) => props.theme.colors.primary.disabled};
  };
`;

const StyledAvatarWrapper = styled.div`
  margin-right: 20px;
`;

const UserMenu: React.FC = () => {
  const { user, isLoading } = useSelector(getAuthState);

  if (isLoading) {
    return <StyledSpan>Идёт загрузка</StyledSpan>;
  }

  if (!user) {
    return <StyledSpan>Произошла ошибка при загрузке</StyledSpan>;
  }

  return (
    <StyledButton>
      <UserName>${user.company}\${user.name}</UserName>
      <StyledAvatarWrapper>
        <UserAvatar avatar={user.avatar} />
      </StyledAvatarWrapper>
      <StyledArrowIcon />
    </StyledButton>
  );
};

export default UserMenu;
