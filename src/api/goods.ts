import { Good } from '../types/Good';

const API_URL
= 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function fetchData(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

export async function get5First(): Promise<Good[]> {
  const items = await fetchData();

  const filtered = items.sort((first, second) => {
    return first.name.localeCompare(second.name);
  });

  return filtered.slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const items = await fetchData();

  const filtered = items.filter((element) => {
    return element.color === 'red';
  });

  return filtered;
}
