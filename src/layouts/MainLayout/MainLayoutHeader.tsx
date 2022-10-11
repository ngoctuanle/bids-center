import React, { useState } from 'react';
import { Avatar, Button, Layout as AntLayout, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuthContext } from '@context/AuthContext';
import { LoginModal } from '@layouts/MainLayout/LoginModal';

const { Header } = AntLayout;

export function MainLayoutHeader() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { isAuthenticated, setUser } = useAuthContext();

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    setUser(null);
    setOpen(false);
  };

  return (
    <>
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
          <Button type="primary" onClick={() => setOpenModal(true)}>
            Login
          </Button>
        )}
      </Header>
      <LoginModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}
