import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          new Error(`${response.status} ${response.statusText}`),
        );
      }

      return response.json();
    })
    .catch((error: Error) => Promise.reject(error));
}

export const get5First = async () => {
  const serverAnswer = await getAll();

  return serverAnswer
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .splice(0, 5);
};

export const getRedGoods = async () => {
  const serverAnswer = await getAll();

  return serverAnswer.filter(good => good.color === 'red');
};
