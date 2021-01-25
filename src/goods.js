import { request } from './helpers';

const endPoint = '/goods.json';

export const getAll = () => request(endPoint);

export const get5First = () => request(endPoint)
  .then(result => result
    .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5));

export const getRed = () => request(endPoint)
  .then(result => result.filter(good => good.color === 'red'));
