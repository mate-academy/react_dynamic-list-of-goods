export interface Good {
  id: number;
  name: string;
  color: string;
};

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
  // always return PROMISE
};
