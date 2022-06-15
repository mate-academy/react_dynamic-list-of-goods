// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(result => result.sort((foodA, foodB) => {
      return (
        foodA.name.localeCompare(foodB.name)
      );
    }).slice(0, 5));
};

export const getRedGoods = (color: string): Promise<Good[]> => {
  return getAll()
    .then(result => result.filter((good:Good) => good.color === color));
};
