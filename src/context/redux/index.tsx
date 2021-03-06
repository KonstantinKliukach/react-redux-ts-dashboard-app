import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

const ReduxContext: React.FC = (props) => (
  <ReduxProvider store={store}>
    {props.children}
  </ReduxProvider>
);

export default ReduxContext;
