import { useDispatch, useSelector } from 'react-redux';
import { getUserName, authOperations } from 'redux/auth';

import { Avatar, Button, Popover } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { PopoverMenu, UserName } from '../Layout.styled';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const content = (
    <PopoverMenu>
      <Button
        type="dashed"
        danger
        onClick={() => dispatch(authOperations.logOut())}
        icon={<LogoutOutlined />}
      >
        LogOut
      </Button>
    </PopoverMenu>
  );
  return (
    <Popover placement="bottomRight" content={content} trigger="hover">
      <Avatar
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          marginRight: '10px',
          cursor: 'pointer',
        }}
      >
        {name.charAt(0).toUpperCase()}
      </Avatar>
      <UserName>{name}</UserName>
    </Popover>
  );
};
