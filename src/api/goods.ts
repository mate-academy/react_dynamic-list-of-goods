// import axios from 'axios';

import { Good } from '../types/Good';

// eslint-disable-next-line
// const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods`;

// const instance = axios.create({ baseURL: API_URL });

// export const getAllGoods = async () => {
//   try {
//     const response = await instance.get('/goods.json');

//     return response.data;
//   } catch (error) {
//     window.console.error('Error fetching goods:', error);
//     throw error;
//   }
// };

// export const get5First = async () => {
//   const goods = await getAllGoods();

//   return goods
// .sort((a, b) => {
//   return a.name.localeCompare(b.name);
// })
// .slice(0, 5);;
// };

// export const getRedGoods = async () => {
//   const goods = await getAllGoods();

//   return goods.filter((good: Good) => good.color === 'red');
// };
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Oops, please try again');
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAllGoods().then(goods => {
    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAllGoods().then(goods => {
    return goods.filter(good => good.color === 'red');
  });
};
