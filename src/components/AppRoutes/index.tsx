import React from 'react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/analytics'>
      <>analytics</>
    </Route>
    <Route path='/notifications'>
      <>notifications</>
    </Route>
    <Redirect to="/analytics"/>
  </Switch>
);

export default AppRoutes;
