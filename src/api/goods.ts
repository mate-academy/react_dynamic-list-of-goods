// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export async function get5First(): Promise<Good[]> {
  const goods = await getAll();

  return goods
    .sort((item1, item2) => item1.name.localeCompare(item2.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
}
