export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum SortType {
  All = 'getAll',
  FirstFive = 'get5First',
  RedGoods = 'getRedGoods',
}
