import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

async function fetchGoods(): Promise<Good[]> {
  let response: Response;

  try {
    response = await fetch(API_URL);
  } catch {
    throw new Error('Network error: could not reach the server.');
  }

  if (!response.ok) {
    throw new Error(
      `Server error (${response.status}): ${response.statusText}`,
    );
  }

  try {
    return await response.json();
  } catch {
    throw new Error('Invalid JSON format in response.');
  }
}

export function getAll(): Promise<Good[]> {
  return fetchGoods();
}

export function get5First(): Promise<Good[]> {
  return fetchGoods().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}

export function getRedGoods(): Promise<Good[]> {
  return fetchGoods().then(goods => goods.filter(good => good.color === 'red'));
}
