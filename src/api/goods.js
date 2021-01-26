// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async() => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async() => {
  const first5Goods = await getAll();

  return first5Goods.sort((good1, good2) => (good1.name)
    .localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async() => {
  const redGoods = await getAll();

  return redGoods.filter(good => good.color === 'red');
};
