import { Good } from './types';
// GoodsData
const API_URL = 'https://mate.academy/students-api/goods';

interface ResponseData<D> {
  data: D;
  error?: string;
  meta?: any;
}

type GoodsData = ResponseData<Good[]>;

export function loadGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(({ data }: GoodsData) => data);
}
