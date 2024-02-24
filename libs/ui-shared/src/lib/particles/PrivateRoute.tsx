import { getAuth } from 'firebase/auth';
import React, { ReactNode } from 'react';

import { Navigate, Route } from 'react-router-dom';

import * as myConstClass from '../../../../../src/constants/router.constants';

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { currentUser } = getAuth();
  if (currentUser) return children;
  return <Navigate to={myConstClass.ROUTE_WEB.LOGIN_PAGE} />;
};

export default PrivateRoute;
