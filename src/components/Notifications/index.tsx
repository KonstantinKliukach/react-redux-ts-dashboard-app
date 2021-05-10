import { MenuItemList } from 'components/MainMenu';
import Tabs from 'components/Tabs';
import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  useRouteMatch,
} from 'react-router-dom';

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
      <Switch>
        <Route path={url + tabs[0].path}>
          Global
        </Route>
      </Switch>
      <Redirect to={url + tabs[0].path} />
    </>
  );
};

export default Notifications;
