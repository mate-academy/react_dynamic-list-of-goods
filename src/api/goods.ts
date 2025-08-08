import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  // Змінюємо на async функцію
  const response = await fetch(API_URL); // Використовуємо await для очікування відповіді

  // Перевіряємо, чи була відповідь успішною (статус 2xx)
  if (!response.ok) {
    // Якщо ні, кидаємо помилку, яку можна буде зловити в .catch()
    throw new Error(
      `Failed to fetch goods: ${response.status} ${response.statusText}`,
    );
  }

  return response.json(); // Якщо все добре, повертаємо JSON
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sortedGoods.slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  }); // get only red
};
