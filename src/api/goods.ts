import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return (
    getAll()
      .then(goods => {
        return goods
          .sort((firstItem, secondItem) =>
            firstItem.name.localeCompare(secondItem.name),
          )
          .slice(0, 5);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log('There was an error', error))
  );
};

export const getRedGoods = () => {
  return (
    getAll()
      .then(goods => {
        return goods.filter(item => item.color === 'red');
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log('There was an error', error))
  );
};
