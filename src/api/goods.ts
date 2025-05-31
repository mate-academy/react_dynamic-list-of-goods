export interface Good {
  id: number;
  name: string;
  color: string;
}

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getFirstFiveGoods = async (): Promise<Good[]> => {
  const allGoods = await getAllGoods();
  return allGoods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const allGoods = await getAllGoods();
  return allGoods.filter(good => good.color === 'red');
};
