// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const getGoods = () => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Content type is not supported');
      }

      return response.json();
    });
};

export function getAll(): Promise<Good[]> {
  return getGoods()
    .then(goods => goods)
    .catch(error => error);
}

export const get5First = () => {
  return getGoods()
    .then(goods => goods.slice(0, 5))
    .catch(error => error);
};

export const getRed = () => {
  return getGoods()
    .then(goods => goods.filter((good: Good) => good.color === 'red'))
    .catch(error => error);
};
