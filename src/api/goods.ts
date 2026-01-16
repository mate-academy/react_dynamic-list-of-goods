import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods);
}

export const get5First = () => {
  return getAll().then(
    goods =>
      [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5), // Нужно делать копию т.к. пункты ниже не пройдут
  ); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};

// √ should show no goods by default

// 1) should load all 13 goods

// 2) should use expected colors for the goods

// √ should load the first 5 goods

// √ should load red goods

// √ should not send requests to the server by default

// √ should send a new request on each click

// Когда ты делаешь goods.sort(), JavaScript меняет массив на месте. То есть тот же самый массив, который вернул API, теперь уже отсортирован.
// Почему это плохо для тестов:
// Тесты кликают разные кнопки по очереди (all, first 5, red).
// Если массив уже изменён (sort или filter), то кнопка all больше не получает оригинальный порядок данных.
// Cypress проверяет DOM и не находит нужные элементы → тесты падают.

// Решение: [...goods] делает копию массива, а sort() меняет только эту копию, а не оригинал.
// Так исходные данные остаются чистыми, и все тесты проходят.
