import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { OngoingBidItem } from '@models/bid';
import { addDays, format } from 'date-fns';
import { Button, Table } from 'antd';

const columns: ColumnsType<OngoingBidItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Started price',
    dataIndex: 'started_price',
    key: 'started_price',
  },
  {
    title: 'Current price',
    dataIndex: 'current_price',
    key: 'current_price',
    render: (_, record) => <b>{record.current_price}</b>,
  },
  {
    title: 'Started date',
    dataIndex: 'started_date',
    key: 'started_date',
    render: (_, record) => format(record.started_date, 'P'),
  },
  {
    title: 'Ended date',
    dataIndex: 'ended_date',
    key: 'ended_date',
    render: (_, record) => format(record.ended_date, 'P'),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => <Button type="primary">Bid</Button>,
  },
];

const data: OngoingBidItem[] = [
  {
    id: '1',
    name: 'Golden cup',
    started_price: 1_000,
    started_date: new Date(),
    ended_date: addDays(new Date(), 2),
    current_price: 5_000,
  },
  {
    id: '2',
    name: 'Sliver sword',
    started_price: 1_000,
    started_date: new Date(),
    ended_date: addDays(new Date(), 2),
    current_price: 4_000,
  },
];

export function OngoingBidsListing() {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
