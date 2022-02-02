const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = async () => {
  const response = await fetch(API_URL);
  const goods: Good[] = await response.json();

  return goods;
};

export const get5First = async () => {
  const goods = await getAll();

  goods.sort((good1, good2) => good1.name.localeCompare(good2.name));

  return goods.slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
