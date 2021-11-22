// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const firstFiveGoods = await fetch(API_URL).then(response => response.json());

  return firstFiveGoods.slice(0, 5);
};

export const getRedGoods = async () => {
  const allRedGoods = await fetch(API_URL).then(response => response.json());

  return allRedGoods.filter((good: Good) => good.color === 'red');
};
