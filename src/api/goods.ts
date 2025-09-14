import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

// завантажує всі товари
export async function getAll(): Promise<Good[]> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch goods: ${res.status} ${res.statusText}`
      );
    }

    return await res.json();
  } catch (err) {
    throw new Error('Network error while fetching goods');
  }
}

// завантажує перші 5 (відсортовані за назвою)
export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

// завантажує лише червоні товари
export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
