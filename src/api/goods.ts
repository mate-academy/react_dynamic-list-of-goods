// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  const result = response.json();

  return result;
}

export const get5First = async () => {
  return (await getAll())
    .sort((a: Good, b: Good) => a.name.localeCompare(b.name)).splice(0, 5);
};

export const getRedGoods = async () => {
  return (await getAll())
    .filter((a: Good) => a.color === 'red');
};
