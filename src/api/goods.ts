// import { Good } from '../types/Good';
// // eslint-disable-next-line
// const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// export async function getAll(): Promise<Good[]> {
//   const response = await fetch(API_URL);

//   return response.json();
// }

// export const get5First = () => {
//   return getAll()
//     .then(goods => goods
//       .sort((a, b) => a.name.localeCompare(b.name))
//       .filter((_, index) => index >= 0 && index < 5));
// };

// export const getRed = () => {
//   return getAll()
//     .then(goods => goods.filter(good => good.color === 'red'));
// };

import { Good } from '../types/Good';

const API_URL
= 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch goods data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return goods
      .slice(0, 5)
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    throw new Error('Error getting first 5 goods');
  }
};

export const getRed = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    throw new Error('Error getting red goods');
  }
};
