// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = () => {
  const showFiveGoods = getAll().then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

  return showFiveGoods;
};

export const getRedGoods = () => {
  const redGoods = getAll().then(goods => goods.filter(good => good.color === 'red'));

  return redGoods;
};
