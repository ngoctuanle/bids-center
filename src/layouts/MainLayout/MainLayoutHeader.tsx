import React, { useState } from 'react';
import { Avatar, Button, Layout as AntLayout, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuthContext } from '@context/AuthContext';

const { Header } = AntLayout;

export function MainLayoutHeader() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setUser } = useAuthContext();

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    setUser(null);
    setOpen(false);
  };

  return (
    <Header className="flex justify-end items-center">
      {isAuthenticated ? (
        <Popover
          content={<a onClick={handleLogout}>Logout</a>}
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Avatar
            style={{ display: 'flex' }}
            className="items-center justify-center"
            shape="square"
            size="large"
            icon={<UserOutlined />}
          />
        </Popover>
      ) : (
        <Button type="primary">Login</Button>
      )}
    </Header>
  );
}
