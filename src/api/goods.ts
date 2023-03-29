import { Good } from '../types/Good';

function sortByName(value: Good[]): Good[] {
  return [...value].sort((prev, curr) => prev.name.localeCompare(curr.name));
}

function sliceByNumber(value: Good[], number: number): Good[] {
  return [...value].slice(0, number);
}

function filterByColor(value: Good[], color: string): Good[] {
  return [...value].filter(element => element.color === color);
}

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(Error);
    })
    .catch(error => {
      window.console.warn(`${error} Not found`);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => sortByName(goods))
    .then(goods => sliceByNumber(goods, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => filterByColor(goods, 'red'));
};
