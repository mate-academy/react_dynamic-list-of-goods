// eslint-disable-next-line @typescript-eslint/quotes
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const goods = await getAll();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export async function getRed() {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
}
