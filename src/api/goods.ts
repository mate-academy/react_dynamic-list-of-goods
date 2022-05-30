// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export async function get5First(): Promise<Good[]> {
  const data = await getAll();

  return data
    .sort((g1: Good, g2: Good) => g1.name.localeCompare(g2.name)).slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const data = await getAll();

  return data.filter((el: Good) => el.color === 'red');
}
