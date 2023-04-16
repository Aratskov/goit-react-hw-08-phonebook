import { useDispatch, useSelector } from 'react-redux';
import { Btn, Nav } from './UserMenu.styled';
import { getName } from 'redux/auth/selectorsAuth';
import { logOut } from 'redux/auth/operationsAuth';

export const UserMenu = () => {
  const name = useSelector(getName);
  const dispatch = useDispatch();

  return (
    <>
      <Nav>
        <p>Welcome,{name}</p>
        <Btn onClick={() => dispatch(logOut())}>L</Btn>
      </Nav>
    </>
  );
};
