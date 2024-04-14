export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum GoodsTypes {
  AllGoods = 'all-goods',
  FirstFiveGoods = 'first-5-goods',
  RedGoods = 'red-goods',
}
