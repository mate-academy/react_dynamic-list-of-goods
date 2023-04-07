import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      return response.json();
    })
    .catch(error => {
      throw new Error(`Error fetching all goods: ${error}`);
    });
}

export const get5First = async () => {
  try {
    const goods = await getAll();

    return goods
      .sort((prevGood, nextGood) => prevGood.name.localeCompare(nextGood.name))
      .slice(0, 5);
  } catch (error) {
    throw new Error(`Error fetching 5 first goods: ${error}`);
  }
};

export const getRedGoods = async () => {
  try {
    const goods = await getAll();

    return goods
      .filter(good => good.color === 'red');
  } catch (error) {
    throw new Error(`Error fetching only red goods: ${error}`);
  }
};
