import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const COUNT = 5;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`,
        );
      }

      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, COUNT),
    )
    .catch(errorGet5 => {
      throw new Error(`Error Load 5 first goods:, ${errorGet5}`);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(errorGetRed => {
      throw new Error(`Error Load red goods:', ${errorGetRed}`);
    }); // get only red
};
