import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const wait = (delay: number): Promise<typeof delay> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export async function getAllGoods(): Promise<Good[]> {
  await wait(1000);
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const get5FirstGoods = async () => {
  const allGoods = await getAllGoods();

  return allGoods
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAllGoods();

  return allGoods.filter((good) => good.color === 'red');
};
