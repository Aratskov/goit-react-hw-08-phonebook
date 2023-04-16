import { Wrap, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrap>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Wrap>
  );
};
