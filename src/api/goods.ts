// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response: Response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const limit = 5;
  const allGoods: Good[] = await getAll();

  return allGoods.slice(0, limit);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const redOnly = (item: Good): boolean => item.color === 'red';
  const allGoods: Good[] = await getAll();

  return allGoods.filter(redOnly);
};
