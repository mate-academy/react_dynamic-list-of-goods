// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `${response.status} - ${response.statusText}`,
      );
    }

    return response.json();
  })
  .catch((error) => {
    throw new Error(error);
  });

export function getAll() {
  return request();
}

export const get5First = () => request()
  .then(goods => goods.slice(0, 5));

export const getRed = () => request()
  .then(goods => goods.filter(good => good.color === 'red'));
