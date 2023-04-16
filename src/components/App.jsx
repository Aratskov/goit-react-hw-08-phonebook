import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Contacts } from 'pages/Contacts/Contacts';
import { fetchCurrentUser } from 'redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import HomePage from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // const contacts = useSelector(getContacts);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};
