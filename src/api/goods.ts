import { Good } from '../react-app-env';
// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.ok
  // is it okay?
    ? response.json()
    : Promise.reject(new Error(`${response.status}: ${response.statusText}`));
}

export const get5First = async () => {
  const goods = await getAll();

  return goods.slice(0, 5).sort((a, b) => a.name.localeCompare(b.name));
};

export const getRed = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
