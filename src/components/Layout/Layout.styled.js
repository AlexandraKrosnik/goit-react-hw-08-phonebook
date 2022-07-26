import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #f9f9f9;
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 15px 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #8f8f8f;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;
  &.active {
    color: #ef0c0c;
  }
  &:hover,
  &:focus {
    color: #e04a15;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const PopoverMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const UserName = styled.span`
  color: #8f8f8f;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;

  &.active {
    color: #ef0c0c;
  }
  &:hover,
  &:focus {
    color: #e04a15;
    cursor: pointer;
  }
`;
export const PopoverLink = styled(NavLink)`
  margin-bottom: 10px;
  margin-right: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: 400;
  transition: color 0.5s ease-in-out;

  &.active {
    color: #ef0c0c;
  }
  &:hover,
  &:focus {
    color: #e04a15;
  }
`;
