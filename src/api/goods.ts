import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.jso`;
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
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, COUNT),
    )
    .catch(errorGet5 => {
      // eslint-disable-next-line no-console
      console.error('Error in get5First:', errorGet5);

      return [];
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(errorGetRed => {
      // eslint-disable-next-line no-console
      console.error('Error in getRedGoods:', errorGetRed);

      return [];
    }); // get only red
};
