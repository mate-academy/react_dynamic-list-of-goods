import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

// Базова функція для запитів
const fetchGoods = async (): Promise<Good[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const goods = await response.json();

    return goods;
  } catch (error) {
    throw new Error('Failed to load goods from server');
  }
};

// Всі товари
export const getAll = (): Promise<Good[]> => {
  return fetchGoods();
};

// Перші 5 відсортованих
export const get5First = (): Promise<Good[]> => {
  return fetchGoods().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
};

// Тільки червоні товари
export const getRedGoods = (): Promise<Good[]> => {
  return fetchGoods().then(goods => goods.filter(good => good.color === 'red'));
};
