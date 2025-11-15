export interface Good {
  id: number;
  name: string;
  color: string;
}

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const sortByName = (a: Good, b: Good) => a.name.localeCompare(b.name);

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    return [...goods] // ← копія, щоб не мутувати
      .sort(sortByName) // ← тепер безпечно
      .slice(0, 5); // ← slice не мутує
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
