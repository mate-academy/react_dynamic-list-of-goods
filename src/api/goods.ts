// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const FIVE_COLORS = 5;
const RED_COLORS = 'red';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  return (await getAll())
    .sort((firstGood, secondGood) => (
      firstGood.name.localeCompare(secondGood.name)
    ))
    .slice(0, FIVE_COLORS);
};

export const getRedGoods = async () => {
  return ((await getAll()).filter((good) => good.color === RED_COLORS));
};
