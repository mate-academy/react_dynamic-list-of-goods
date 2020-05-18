import { Good } from '../components/TypeDefinitions';

const GOODS_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

// export const getGoods = (): Promise<Good[]> => {
//   return fetch(GOODS_URL)
//     .then(response => response.json());
// };

export const getGoods = async (): Promise<Good[]> => {
  const response = await fetch(GOODS_URL);
  const data = await response.json();

  return data;
};
