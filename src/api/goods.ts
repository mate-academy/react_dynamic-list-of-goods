import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      return [];
    }

    const data: Good[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();
    return [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  } catch (error) {
    return [];
  }
};

export const getRedGoods = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();
    return goods.filter(good => good.color === 'red');
  } catch (error) {
    return [];
  }
};
