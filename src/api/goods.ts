import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function sortFiveFirst(array: Good[]) {
  const sorted = [...array]
    .sort((firstItem, secondItem) => (
      firstItem.name.localeCompare(secondItem.name)
    ));

  sorted.slice(0, 5);

  return sorted;
}

function filterByColor(array: Good[], color: string) {
  const filtered = array.filter(item => item.color === color);

  return filtered;
}

export async function getAll(): Promise<Good[]> {
  const result = await fetch(API_URL);

  return result.json();
}

export const get5First = () => {
  return getAll()
    .then(goods => sortFiveFirst(goods));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => filterByColor(goods, 'red'));
};
