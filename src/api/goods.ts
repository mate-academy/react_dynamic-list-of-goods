// eslint-disable-next-line @typescript-eslint/quotes
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const goods = await getAll();

  return goods.slice(0, 5).sort((a, b) => a.name.localeCompare(b.name));
};

export const getRed = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
