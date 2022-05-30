// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const result = (await getAll())
    .sort((a, b) => b.name.localeCompare(a.name))
    .slice(0, 5);

  return result;
};

export const getRedGoods = async () => {
  const result = (await getAll())
    .filter(red => red.color === 'red');

  return result;
};
