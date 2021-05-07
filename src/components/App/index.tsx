import React, { useEffect } from 'react';
import Backdrop from 'components/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from 'context/redux/reducers/auth';
import { auth } from 'context/redux/actions/auth';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuthState);

  useEffect(() => {
    dispatch(auth());
  }, []);

  if (isLoading) {
    return (
      <Backdrop />
    );
  }
  return (
    <>Nya</>
  );
};

export default App;
