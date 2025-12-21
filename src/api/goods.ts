import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data: Good[] = await response.json();

    return data;
  } catch (error) {
    throw error; // пробросимо помилку, щоб її можна було обробити у App
  }
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods =>
    [...goods] // створюємо копію, щоб не мутувати оригінал
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5),
  );
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
