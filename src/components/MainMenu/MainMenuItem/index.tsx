import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuItem {
  path: string
  name: string
  active: boolean
}

type ActiveProps = Pick<MenuItem, 'active'>;

const StyledLi = styled.li<ActiveProps>`
  max-width: 268px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background-color: ${(props) => (props.active ? props.theme.colors.active : '#FFF')};
  color: ${(props) => (props.active ? props.theme.colors.fontColors.main : '#91A0C9')};
  border-radius: 0px 10px 10px 0px;
  &:hover {
    color: ${(props) => props.theme.colors.primary.hover};
  };
  &:active {
    color: ${(props) => props.theme.colors.primary.active};
  };
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 11px;
  padding-left: 32px;
`;

const StyledSpan = styled.span`
  margin-left: 38px;
  color: inherit;
  font-weight: 500;
`;

const IconWrapper = styled.div<ActiveProps>`
  svg {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    stroke: ${(props) => (props.active ? props.theme.colors.primary.stat : props.theme.colors.secondary.stat)};
    ${StyledLink}:hover & {
      stroke: ${(props) => props.theme.colors.primary.hover};
    };
    ${StyledLi}:active & {
      stroke: ${(props) => props.theme.colors.primary.active};
    };
  }
`;

const MainMenuItem: React.FC<MenuItem> = (props) => {
  const { active, name, path } = props;
  return (
    <StyledLi active={active}>
      <StyledLink to={path}>
        <IconWrapper active={active}>
          {props.children}
        </IconWrapper>
        <StyledSpan>{name}</StyledSpan>
      </StyledLink>
    </StyledLi>
  );
};

export default MainMenuItem;
