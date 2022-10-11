import { Routes } from '@models/route';
import { lazy } from 'react';

const BidsListing = lazy(() =>
  import('@pages/bids/BidsListing').then((p) => ({
    default: p.BidsListing,
  }))
);

export const BidsRoutes: Routes = [
  {
    path: 'bids',
    component: BidsListing,
  },
];
