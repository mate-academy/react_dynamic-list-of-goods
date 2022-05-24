// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const allgoods = await fetch(API_URL)
    .then(response => response.json());

  return allgoods;
}

export const get5First = async (): Promise<Good[]> => {
  return (await getAll())
    .sort((prev, curr) => prev.name.localeCompare(curr.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  return (await getAll())
    .filter((good: { color: string; }) => good.color === 'red');
};
