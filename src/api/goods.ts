// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} -- ${response.statusText}`);
      }

      return response.json();
    });
};

export function getAll(): Promise<Good[]> {
  return request();
}

export const get5First = () => {
  return request()
    .then(data => data.slice(0, 5));
};

export const getRedGoods = () => {
  return request()
    .then(data => data.filter((el: Good) => el.color === 'red'));
};
