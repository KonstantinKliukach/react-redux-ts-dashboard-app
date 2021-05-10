import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as ReactAnalytics } from 'assets/icons/menu/analytics.svg';
import { ReactComponent as ReactNotifications } from 'assets/icons/menu/push.svg';
import styled from 'styled-components';
import MainMenuItem from './MainMenuItem';

export interface MenuItemList {
  id: number,
  name: string,
  path: string,
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
}

const menuItems: MenuItemList[] = [
  {
    id: 0,
    name: 'Аналитика',
    path: '/analytics',
    logo: ReactAnalytics,
  },
  {
    id: 2,
    name: 'Уведомления',
    path: '/notifications',
    logo: ReactNotifications,
  },
];

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const MainMenu: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <StyledUl>
        {
          menuItems.map((menuItem) => <MainMenuItem
            key={menuItem.id}
            path={menuItem.path}
            name={menuItem.name}
            active={pathname.includes(menuItem.path)}
            >
              <menuItem.logo />
            </MainMenuItem>)
        }
      </StyledUl>
    </nav>
  );
};

export default MainMenu;
