import React from 'react';
import { Button, Tabs } from 'antd';
import { useAuthContext } from '@context/AuthContext';

enum TABS {
  COMPLETED = 'COMPLETED',
  ON_GOING = 'ON_GOING',
}

export const BidsListing = () => {
  const { isAuthenticated } = useAuthContext();

  const addNewItemBtn = isAuthenticated ? (
    <Button type="primary">New item</Button>
  ) : null;

  return (
    <Tabs
      defaultActiveKey={TABS.COMPLETED}
      tabBarExtraContent={addNewItemBtn}
      items={[
        { label: 'Completed', key: TABS.COMPLETED },
        { label: 'On going', key: TABS.ON_GOING },
      ].filter((item) => isAuthenticated || item.key === TABS.COMPLETED)}
    />
  );
};
