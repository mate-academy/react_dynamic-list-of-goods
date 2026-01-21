import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    // eslint-disable-next-line
    console.error('Ошибка при загрузке товаров:', err);

    throw err;
  }
}

export const get5First = async () => {
  try {
    const goods = await getAll();

    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);

    return [];
  }
};

export const getRedGoods = async () => {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);

    return [];
  }
};
