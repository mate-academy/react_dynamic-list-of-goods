/* eslint-disable */
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
import { Good } from "../Good";

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async (): Promise<Good[]> => {
  const data = await getAll();

  return [...data]
    .sort((firstGood, secondGood) => {
      return firstGood.name.localeCompare(secondGood.name)
    })
        .slice(0, 5)
};

export const getRedGoods = async (): Promise<Good[]> => {
  const data = await getAll();

  return data.filter((good: Good) => good.color === 'red')
};
