import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { CompletedBidItem } from '@models/bid';
import { addDays, format } from 'date-fns';
import { Table } from 'antd';

const columns: ColumnsType<CompletedBidItem> = [
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
    title: 'Highest price',
    dataIndex: 'highest_price',
    key: 'highest_price',
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
];

const data: CompletedBidItem[] = [
  {
    id: '1',
    name: 'Golden cup',
    started_price: 1_000,
    started_date: new Date(),
    ended_date: addDays(new Date(), 2),
    highest_price: 5_000,
  },
  {
    id: '2',
    name: 'Sliver sword',
    started_price: 1_000,
    started_date: new Date(),
    ended_date: addDays(new Date(), 2),
    highest_price: 4_000,
  },
];

export function CompletedBidsListing() {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
