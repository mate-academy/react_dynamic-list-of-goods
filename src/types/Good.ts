export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum RGBCOLOR {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

export enum GoodsFilter {
  getAll = 'getAll',
  get5First = 'get5First',
  getRedGoods = 'getRedGoods',
}
