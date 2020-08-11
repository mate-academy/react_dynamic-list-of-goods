export interface Good {
  id: number;
  name: string;
  color: string;
}

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getGoods(): Promise<Good[]> {
  return fetch(API_URL).then(res => res.json());
}
