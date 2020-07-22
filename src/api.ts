import { Good } from './types';
// GoodsData
const API_URL = 'https://mate.academy/students-api/goods';

interface ResponseData<D> {
  data: D;
  error?: string;
}

type GoodsData = ResponseData<Good[]>;

export function loadGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response not successful ${response.statusText}`);
    })
    .then(({ data }: GoodsData) => data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch');
    });
}
