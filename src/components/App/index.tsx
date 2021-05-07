import React, { useEffect } from 'react';
import Backdrop from 'components/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from 'context/redux/reducers/auth';
import { auth } from 'context/redux/actions/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import MainLayout from 'layouts/MainLayout';

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
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
