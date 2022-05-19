// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((response) => response.json());
}

export function get5First(): Promise<Good[]> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const part = data.slice(0, 5);

      return part.sort((g1: Good, g2: Good) => g1.name.localeCompare(g2.name));
    });
}

export function getRedGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.filter((el: Good) => el.color === 'red'));
}
