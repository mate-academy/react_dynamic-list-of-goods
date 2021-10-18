// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => {
      return result.slice(0, 5).sort((a: Good, b: Good) => {
        return a.name.localeCompare(b.name);
      });
    });
};

export const getRedGoods = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => {
      return result.filter((good: Good) => good.color === 'red');
    });
};
