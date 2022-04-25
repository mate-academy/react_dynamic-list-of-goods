// import { result } from "cypress/types/lodash";

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return getAll()
    .then(goods => {
      return goods.filter((result, index) => {
        return index < 5;

        return result;
      });
    });
}

export function getRedGoods(): Promise<Good[]> {
  return getAll()
    .then(goods => {
      return goods.filter(result => result.color === 'red');
    });
}
