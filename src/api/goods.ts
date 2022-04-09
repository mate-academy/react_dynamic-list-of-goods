// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const response = fetch(API_URL);
  const firstFive: Promise<Good[]> = (await response).json();
  const result = (await firstFive)
    .sort((a, b) => b.name.localeCompare(a.name))
    .slice(0, 5);

  return result;
};

export const getRedGoods = async () => {
  const response = fetch(API_URL);
  const onlyRed: Promise<Good[]> = (await response).json();
  const result = (await onlyRed)
    .filter(red => red.color === 'red');

  return result;
};
