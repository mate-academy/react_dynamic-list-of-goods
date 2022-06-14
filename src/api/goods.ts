// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const res = await response.json();

  return res;
}

export const get5First = async () => {
  const response = await fetch(API_URL);
  const res = await response.json();

  return res.sort(
    (a : Good, b: Good) => a.name.localeCompare(b.name),
  ).splice(0, 5);
};

export const getRedGoods = async () => {
  const response = await fetch(API_URL);
  const res = await response.json();

  return res.filter((el : Good) => el.color === 'red');
};
