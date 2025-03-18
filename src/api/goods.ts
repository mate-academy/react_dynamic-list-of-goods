import { Good } from '../types/Good';

const BASE_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAllGoods = async (): Promise<Good[]> => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch goods: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching goods: ${error}`);
  }
};

export const getFiveFirstGoods = async (): Promise<Good[]> => {
  try {
    const goods = await getAllGoods();

    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (error) {
    throw new Error(`Error fetching first five goods: ${error}`);
  }
};

export const getRedGoods = async (): Promise<Good[]> => {
  try {
    const goods = await getAllGoods();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    throw new Error(`Error fetching red goods: ${error}`);
  }
};
