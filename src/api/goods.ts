import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods)
    .then(filetredGoods => {
      const newGoods = [...filetredGoods].sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      return newGoods.filter((el, ind) => ind < 5);
    }); // sort and get the first 5
};

export const getRed = () => {
  return getAll()
    .then(goods => goods)
    .then(onlyRed => onlyRed.filter((good: Good) => good.color === 'red')); // get only red
};
