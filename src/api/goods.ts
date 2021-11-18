// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function request(url: string): Promise<Good[]> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getAll(): Promise<Good[]> {
  const goods = await request(API_URL);

  return goods;
}

export async function getFiveFirstGood(): Promise<Good[]> {
  const allGoods = await request(API_URL);

  return [...allGoods]
    .sort((a: Good, b: Good): number => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const allGoods = await request(API_URL);

  return allGoods.filter(good => good.color === 'red');
}
