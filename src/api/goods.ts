import { Good } from '../types/Good';
import debounce from 'lodash.debounce';

// Use the same remote URL the tests expect
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(String(error));
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const allGoods = await getAll();

    // sort goods alphabetically by name to provide deterministic "first five"
    const sorted = allGoods
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    return sorted.slice(0, 5);
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getRed = async (): Promise<Good[]> => {
  try {
    const allGoods = await getAll();

    return allGoods.filter(good => good.color === 'red');
  } catch (error) {
    throw new Error(String(error));
  }
};

export const debouncedLoadAllGoods = debounce(getAll, 300);
