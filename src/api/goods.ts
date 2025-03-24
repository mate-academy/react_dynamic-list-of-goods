import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    return response.json();
  });
}

const get5First = () => {
  return getAll().then(goods => [
    ...goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  ]); // sort and get the first 5
};

const getRedGoods = () => {
  return getAll().then(goods => [
    ...goods.filter(item => item.color === 'red'),
  ]); // get only red
};

export { getRedGoods, get5First, getAll };
