// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const good = await getAll();

  return good
    .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const good = await getAll();

  return good
    .filter(({ color }) => color === 'red');
};
