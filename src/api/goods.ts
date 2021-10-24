// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then((response: Good[]) => {
      return response.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then((response: Good[]) => {
      return response.filter(item => item.color === 'red');
    });
};
