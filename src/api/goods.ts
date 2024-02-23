import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = async () => {
  const data = await getAll().then(goods => goods);
  const goods = data.sort((a, b) => a.name.localeCompare(b.name))
  return goods.slice(0, 5)// sort and get the first 5
};

export const getRedGoods = async () => {
  const data = await getAll().then(goods => goods);

  return data.filter(elem => elem.color === 'red'); // get only red
};
