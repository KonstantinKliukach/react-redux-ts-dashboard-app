import React from 'react';

import { ReactComponent as ReactLogo } from 'assets/icons/logo_full/severstal.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to='/'>
    <ReactLogo />
  </Link>
);

export default Logo;
