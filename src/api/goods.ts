// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods;
};

export const get5First = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods = await response.json();
  const firstFiveGoods = goods.slice(0, 5);

  return firstFiveGoods
    .sort((a: Good, b: Good) => a.name.localeCompare(b.name));
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods.filter((product: Good) => product.color === 'red');
};
