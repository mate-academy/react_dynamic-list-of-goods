// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export async function get5First(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const goods = await response.json();
  const res = goods.sort((g: Good, g2: Good) => g.name.localeCompare(g2.name));

  return res.slice(0, 5);
}

export async function getRed(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods.filter((good: Good) => good.color === 'red');
}
