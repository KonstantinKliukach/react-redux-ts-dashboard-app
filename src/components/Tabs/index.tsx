import React from 'react';
import styled from 'styled-components';
import { useLocation, useRouteMatch } from 'react-router-dom';

import { Tab } from 'components/Notifications';
import TabItem from './Tab';

const StyledNav = styled.nav`
  padding-left: 51px;
  border-bottom: 3px solid #E3EBF6;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

interface Tabs {
  tabs: Tab[];
}

const Tabs: React.FC<Tabs> = ({ tabs }) => {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  return (
    <StyledNav>
      <StyledUl>
          {
            tabs.map((tab) => {
              const fullPath = url + tab.path;
              return (
                <TabItem
                  key={tab.id}
                  path={fullPath}
                  name={tab.name}
                  active={pathname === fullPath}
                >
                </TabItem>
              );
            })
          }
      </StyledUl>
    </StyledNav>
  );
};

export default Tabs;
