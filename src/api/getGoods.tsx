const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = async () => {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods;
};
