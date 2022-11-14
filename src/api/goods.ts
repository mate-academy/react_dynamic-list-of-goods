// import { resolve } from 'path';
// import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// export function getAll(): Promise<Good[]> {
//   return fetch(API_URL)
//     .then(response => {
//       if (!response.ok) {
//         // return Promise.reject('Can\'t load todos');
//         throw new Error(`${response.status} - ${response.statusText}`);
//       }

//       return response.json();
//     })
//     .then(result => result.data);
// }

// export const getTodos = () => {
//   return getAll();
// };
// =================

// export const getAll = async () => {
//   await fetch(API_URL)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`${response.status} - ${response.statusText}`);
//       }

//       return response.json();
//     });

//   // .then(result => result.data);
// };
// =======================

export const getAllTodosApi = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const body = await response.json();

  return body;
};

export const getFiveGoodsApi = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const body = await response.json();

  return body.slice(0, 5);
};

export const getRedGoodsApi = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const body = await response.json();

  return body.filter((el: any) => el.color === 'red');
  // await fetch(API_URL)
  //   .then(response => {
  //     response.json();
  //   });
};

// export function getAll(): Promise<Good[]> {
//   return fetch(API_URL)
//     .then(response => response.json());
// }

// export const get5First = () => {
//   return getAll()
//     .then(goods => goods); // sort and get the first 5
// };

// export const getRedGoods = () => {
//   return getAll()
//     .then(goods => goods); // get only red
// };

// fetch(API_URL)
//   .then(response => response.json())
//   .then(goods => {
//     console.log(goods);
//   });

// function wait(delay) {
//   return new Promise(resolve => setTimeout(resolve, delay));
// }

// export const request = (url, options) => {
//   return fetch(`${API_URL}${url}`, options)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`)
//       }

//       return res.json();
//     });
// };

// export function getAll(): Promise<Good[]> {
//   return fetch(API_URL)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`${response.status} - ${response.statusText}`)
//       }

//       return response.json();
//     }
// }

// export const getTodos = () = {
//   return request ('/goods')
// }
