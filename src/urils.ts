// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const request = () => {
  return fetch(API_URL)
    .then(result => {
      if (!result.ok) {
        throw new Error(`${result.status} - ${result.statusText}`);
      }

      return result.json();
    });
};
