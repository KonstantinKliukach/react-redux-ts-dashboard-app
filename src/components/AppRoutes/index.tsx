import React from 'react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Notifications from 'components/Notifications';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/analytics'>
      <>analytics</>
    </Route>
    <Route path='/notifications'>
      <Notifications />
    </Route>
    <Redirect to="/notifications"/>
  </Switch>
);

export default AppRoutes;
