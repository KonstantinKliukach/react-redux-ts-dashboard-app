import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Tab {
  path: string
  name: string
  active: boolean
}

type ActiveProps = Pick<Tab, 'active'>;

const StyledLi = styled.li<ActiveProps>`
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  color: ${(props) => (props.active ? props.theme.colors.fontColors.main : '#91A0C9')};
  padding-top: 28px;
  padding-bottom: 25px;
  margin-right: 100px;
  position: relative;
  &:hover {
    color: ${(props) => props.theme.colors.primary.hover};
  };
  &:active {
    color: ${(props) => props.theme.colors.primary.active};
  };
  &:before {
    content: "";
    position: absolute;
    width: 74px;
    height: 3px;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.fontColors.main};;
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    transform: ${(props) => (props.active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: all 0.3s ease-in-out 0s;
  };
`;

const StyledSpan = styled.span`
  font-size: ${(props) => props.theme.colors.primary.hover};
  color: inherit;
  font-weight: 500;
`;

const TabItem: React.FC<Tab> = (props) => {
  const { active, name, path } = props;
  return (
    <StyledLi active={active}>
      <Link to={path}>
        <StyledSpan>{name}</StyledSpan>
      </Link>
    </StyledLi>
  );
};

export default TabItem;
