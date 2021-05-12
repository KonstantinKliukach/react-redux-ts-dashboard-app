import React from 'react';

import { MenuItemList } from 'components/MainMenu';
import Tabs from 'components/Tabs';
import {
  Switch,
  Redirect,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import Global from './Global';

const Container = styled.div`
  padding: 43px 51px;
`;

export type Tab = Omit<MenuItemList, 'logo'>

const tabs: Tab[] = [
  {
    id: 0,
    name: 'Глобальные объявления',
    path: '/global',
  },
  {
    id: 2,
    name: 'Отправить на группу',
    path: '/group',
  },
  {
    id: 3,
    name: 'Контент-уведомления',
    path: '/content',
  },
];

const Notifications: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <Tabs tabs={tabs} />
      <Container>
        <Switch>
          <Route path={url + tabs[0].path}>
            <Global />
          </Route>
        </Switch>
        <Redirect to={url + tabs[0].path} />
      </Container>
    </>
  );
};

export default Notifications;
