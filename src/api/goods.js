import { request } from '../helpers';

export const getAll = () => request();

export const get5First = () => (
  request()
    .then(response => response
      .sort((a, b) => a.name.localeCompare(b.name)))
    .then(response => response.splice(0, 5))
);

export const getRedGoods = () => (
  request()
    .then(response => response
      .filter(good => good.color === 'red'))
);
