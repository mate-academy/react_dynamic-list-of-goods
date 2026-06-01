import { Good } from '../types/Good';

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAllGoods(): Promise<Good[]> {
  const response = await fetch(API_URL);
  return response.json();
}

export async function get5FirstGoods(): Promise<Good[]> {
  const goods = await getAllGoods();
  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAllGoods();
  return goods.filter(good => good.color === 'red');
}
