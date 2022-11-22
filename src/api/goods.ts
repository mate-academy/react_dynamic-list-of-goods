import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// export const getAllTodosApi = async () => {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error(`${response.status} - ${response.statusText}`);
//   }

//   const body = await response.json();

//   return body;
// };

// export const getFiveGoodsApi = async () => {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error(`${response.status} - ${response.statusText}`);
//   }

//   const body = await response.json();

//   return body.slice(0, 5);
// };

// export const getRedGoodsApi = async () => {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error(`${response.status} - ${response.statusText}`);
//   }

//   const body = await response.json();

//   return body.filter((el: any) => el.color === 'red');
// };

// -----------------------------------------------------------------------

export const getAll = async (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async () => {
  const goods = await getAll();

  return goods.slice(0, 5);
};

export const getRed = async () => {
  const goods = await getAll();

  return goods.filter((el: any) => el.color === 'red');
};
