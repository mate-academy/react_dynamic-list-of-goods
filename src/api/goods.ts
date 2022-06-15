// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

type Good = {
  id: number
  name: string
  color: string
};

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(theGoods => {
      const five = theGoods.filter(good => {
        return good.id <= 5;
      });

      return five;
    });
};

export const getRed = () => {
  return getAll()
    .then(theGoods => {
      const RedGoods = theGoods.filter(good => {
        return good.color === 'red';
      });

      return RedGoods;
    });
};
