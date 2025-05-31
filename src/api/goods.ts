import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return (
    fetch(API_URL)
      .then(response => response.json())
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error in getAll:', error))
  );
}

export const get5First = () => {
  return (
    getAll()
      .then(goods => goods)
      .then(filetredGoods => {
        const newGoods = [...filetredGoods].sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        return newGoods.filter((el, ind) => ind < 5);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error in get5First:', error))
  ); // sort and get the first 5
};

export const getRed = () => {
  return (
    getAll()
      .then(goods => goods)
      .then(onlyRed => onlyRed.filter((good: Good) => good.color === 'red'))
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error in getRed:', error))
  ); // get only red
};
