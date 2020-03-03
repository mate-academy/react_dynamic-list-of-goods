const DATA_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods: () => Promise<Goods> = async () => {
  const response = await fetch(DATA_URL);

  return response.json();
};
