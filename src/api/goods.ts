import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react-with-typescript/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    // Перевіряємо чи відповідь сервера успішна (статус 200-299)
    if (!response.ok) {
      // Якщо сталася помилка, кидаємо виняток для тригеру блока .catch()
      throw new Error('Network response was not ok');
    }

    // Якщо все добре, повертаємо розпарсений масив
    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    // Створюємо копію масиву та сортуємо за алфавітом назви товарів
    const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    // Залишаємо лише перші 5 відсортованих товарів
    return sortedGoods.slice(0, 5);
  });
};

export const getRedGoods = () => {
  // Фільтруємо масив, залишаючи товари суто з червоним кольором
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
