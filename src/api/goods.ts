// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods;
};

export const get5First = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const allGoods: Good[] = await response.json();
  const goods5First = allGoods.slice(0, 5);
  const goodsSort = goods5First
    .sort((a, b) => (
      a.name.localeCompare(b.name)
    ));

  return goodsSort;
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const allGoods: Good[] = await response.json();
  const redGoods = allGoods.filter(good => good.color === 'red');

  return redGoods;
};
