// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const gottenGoods = await response.json();

  return gottenGoods;
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(gottenGoods => {
      return gottenGoods
        .sort((gottenGood1: Good, gottenGood2: Good) => (
          gottenGood1.name.localeCompare(gottenGood2.name)))
        .slice(0, 5);
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(gottenGoods => {
      return gottenGoods
        .filter((good: Good) => good.color === 'red');
    });
};
