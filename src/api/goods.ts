import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Failed to load goods: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export const get5First = () => {
  return getAll().then(goods =>
    goods
      .sort((good1, good2) => {
        return good1.name
          .toLocaleLowerCase()
          .localeCompare(good2.name.toLocaleLowerCase());
      })
      .slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
