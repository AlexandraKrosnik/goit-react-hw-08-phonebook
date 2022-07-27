import { Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth';
import { Nav, MenuList, Link, MenuItem } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Nav>
        <MenuList>
          {isLoggedIn ? (
            <>
              <MenuItem>
                <Link to="/contacts">Контакти</Link>
              </MenuItem>
              <MenuItem>
                <UserMenu />
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link to="/login">Вхід</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/register">Реєстрація</Link>
              </MenuItem>
            </>
          )}
        </MenuList>
      </Nav>
      <Outlet />
    </>
  );
};
