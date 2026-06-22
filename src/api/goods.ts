import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return response.json();
    })
    .then(data => {
      return data;
    });
}

// sort and get the first 5
export const get5First = () => {
  return getAll().then(goods => {
    const sortGoogs = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sortGoogs.slice(0, 5);
  });
};

// get only red
export const getRedGoods = () => {
  return getAll().then(goods => {
    const filterGoogs = goods.filter(el => el.color === 'red');

    return filterGoogs;
  });
};
