// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll().then(response => response.sort((item1: Good, item2: Good) => {
    if (item1.name > item2.name) {
      return 1;
    }

    if (item1.name < item2.name) {
      return -1;
    }

    return 0;
  }).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll().then(response => response.filter((good: Good) => good.color === 'red'));
};
