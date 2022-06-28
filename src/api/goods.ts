// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
}

export async function get5First(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const data = await response.json();
  const part = data.slice(0, 5);

  return part.sort((g1: Good, g2: Good) => g1.name.localeCompare(g2.name));
}

export async function getRedGoods(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.filter((el: Good) => el.color === 'red');
}
