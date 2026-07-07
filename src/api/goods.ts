import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/' +
  'react-with-typescript/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    // Перевіряємо, чи статус відповіді знаходиться в діапазоні 200-299
    if (!response.ok) {
      // Якщо сервер повернув помилку, кидаємо виняток, який буде перехоплено в .catch()
      throw new Error(`Помилка завантаження товарів: ${response.status}`);
    }

    // Якщо все добре, парсимо JSON
    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sortedGoods.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
