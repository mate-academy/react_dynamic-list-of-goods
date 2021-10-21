// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return (await fetch(API_URL)).json();
}

export async function get5First(): Promise<Good[]> {
  return (await getAll())
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  return (await getAll()).filter(good => good.color === 'red');
}
