import React from 'react';

import ReduxContext from './redux';
import ThemeContext from './theme';

const AppContext: React.FC = (props) => (
  <ReduxContext>
    <ThemeContext>
      {props.children}
    </ThemeContext>
  </ReduxContext>
);

export default AppContext;
