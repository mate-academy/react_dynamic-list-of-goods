const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getGoodssFromServer(): Promise<Good[]> {
  return fetch(url)
    .then(response => response.json());
}
