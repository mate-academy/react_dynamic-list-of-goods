// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = () => {
  const allGoods = getAll();

  return allGoods
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = () => {
  const allGoods = getAll();

  return allGoods
    .then(goods => goods
      .filter(good => good.color === 'red'));
};
