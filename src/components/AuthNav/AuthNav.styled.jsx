import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 10px;

  font-weight: 600;
  text-decoration: none;
  color: #fff;

  &.active {
    min-width: 100px;
    color: #4caf50;
    background-color: #fff;
    text-align: center;
    border-radius: 25px;
  }

  &:hover:not(.active) {
    transform: scale(1.2);
  }
`;
