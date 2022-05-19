// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      const firstFive = data.slice(0, 5);

      return firstFive.sort((a: Good, b: Good) => a.name.localeCompare(b.name));
    });
}

export function getRed(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((data) => data.filter((product: Good) => product.color === 'red'));
}
