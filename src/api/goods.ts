// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => (await getAll())
  .sort((a, b) => a.localeCompare - b.localeCompare).splice(0, 5);

export const getRedGoods = async () => (await getAll())
  .filter(good => good.color === 'red');
