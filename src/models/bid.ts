export interface BidItem {
  id: string;
  name: string;
  started_price: number;
  started_date: Date;
  ended_date: Date;
}

export interface CompletedBidItem extends BidItem {
  highest_price: number;
}

export interface OngoingBidItem extends BidItem {
  current_price: number;
}
