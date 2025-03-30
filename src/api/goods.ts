/* eslint-disable no-console */
import { Good } from '../types/Good';

const API_URL = process.env.REACT_APP_API_URL || '';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = goods.sort((a, b) => a.name.localeCompare(b.name));

    return sortedGoods.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
