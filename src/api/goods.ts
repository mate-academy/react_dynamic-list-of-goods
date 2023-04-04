import { Good } from '../types/Good';

function sortByName<T extends Good>(value: T[]): T[] {
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
      if (!response.ok) {
        return Promise.reject(new Error('Server is sleeping'));
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        return Promise.reject(new Error('Wrong format file'));
      }

      return response.json();
    });
}

export const get5First = async () => {
  const goods = await getAll();
  const sortedGoods = sortByName<Good>(goods);
  const first5Goods = sliceByNumber(sortedGoods, 5);

  return first5Goods;
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => filterByColor(goods, 'red'));
};
