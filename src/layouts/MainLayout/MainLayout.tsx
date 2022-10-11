import React, { ReactElement } from 'react';
import { Layout, LayoutProps } from '../type';
import { Layout as AntLayout } from 'antd';
import { AuthProvider } from '@context/AuthContext';
import { MainLayoutHeader } from '@layouts/MainLayout/MainLayoutHeader';

const { Content } = AntLayout;

export const MainLayout: Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <AuthProvider>
      <AntLayout className="h-full">
        <MainLayoutHeader />
        <Content className="my-1 mx-12">{children}</Content>
      </AntLayout>
    </AuthProvider>
  );
};
