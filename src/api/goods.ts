// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `${response.status} - ${response.statusText}`,
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Content-type is not supported');
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods
      .filter(item => item.color === 'red'));
};
