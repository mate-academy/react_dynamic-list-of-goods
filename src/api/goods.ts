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
