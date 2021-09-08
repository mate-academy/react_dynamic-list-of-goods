// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return fetch(API_URL)
    .then(response => response.json()
      .then(result => {
        const firstFive = [];

        for (let i = 0; i < 5; i += 1) {
          firstFive.push(result[i]);
        }

        return firstFive;
      }));
};

export const getRedGoods = () => {
  return fetch(API_URL)
    .then(response => response.json()
      .then(result => result.filter((good: { color: string; }) => good.color === 'red')));
};
