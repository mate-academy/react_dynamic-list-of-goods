// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const getFiveFirst = () => getAll()
  .then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

export const getRed = () => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));

export const getBlue = () => getAll()
  .then(goods => goods.filter(good => good.color === 'blue'));

export const getGreen = () => getAll()
  .then(goods => goods.filter(good => good.color === 'green'));
