import { Link } from 'components/AuthNav/AuthNav.styled';
import { Home } from './Navigate.styled';
import { useSelector } from 'react-redux';
import { getAuthStatus } from 'redux/auth/selectorsAuth';

export const Navigate = () => {
const isAuth = useSelector(getAuthStatus)

  return (
    <Home>
      <Link to="/">Home</Link>
      {isAuth && <Link to="/contacts">Contacts</Link>}
    </Home>
  );
};
