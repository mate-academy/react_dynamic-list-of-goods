const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';
export const API = fetch(API_URL)
  .then((response): Promise<Goods[]> => response.json());
