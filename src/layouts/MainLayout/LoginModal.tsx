import React from 'react';
import { Button, Form, Input, Modal } from 'antd';

interface LoginModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function LoginModal({ open, setOpen }: LoginModalProps) {
  const onFinish = (value: unknown) => {
    console.log(value);
    setOpen(false);
  };

  return (
    <Modal open={open} title="Login" footer={null}>
      {open && (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
}
