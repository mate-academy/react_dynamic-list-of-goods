import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function wait(delay: number): Promise<number> {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll(): Promise<Good[]> {
  await wait(1000);
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const response = await getAll();

  return response.sort(
    (good1, good2) => good1.name.localeCompare(good2.name),
  ).slice(0, 5);
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
