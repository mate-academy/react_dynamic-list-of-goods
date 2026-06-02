import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Робимо копію масиву, сортуємо за назвою і беремо перші 5
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  }); // <-- Закриваємо колбек then
}; // <-- Закриваємо функцію get5First

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Фільтруємо лише ті товари, де колір 'red'
    return goods.filter(good => good.color === 'red');
  });
};
