import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const HEADER_TYPE = 'content-type';
const DATA_TYPE = 'application/json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const contentType = await response.headers.get(HEADER_TYPE)
    || 'Wrong Content Type';

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  if (!contentType.includes(DATA_TYPE)) {
    throw new Error(`Content type is ${response.headers.get(HEADER_TYPE)} and not supported`);
  }

  const json = await response.json();

  return json;
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.id - b.id)
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
