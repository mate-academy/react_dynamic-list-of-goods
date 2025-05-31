import { Good } from '../types/Good';

export function getAll(): Promise<Good[]> {
  return fetch(
    `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`,
  ).then(response =>
    response.json().then((goods: Good[]) => {
      return goods;
    }),
  );
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  ); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
