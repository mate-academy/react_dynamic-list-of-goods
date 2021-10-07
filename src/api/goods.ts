// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/good.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error: Invalid data');
  }

  return response.json();
};

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  const redGoods = getAll().then(goods => goods.filter(good => good.color === 'red'));

  return redGoods;
};
