const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export interface Goods {
  id: number;
  name: string;
  color: string;
}

export const getGoods = async (): Promise<Goods[]> => {
  const response = await fetch(API_URL);

  return response.json();
};
