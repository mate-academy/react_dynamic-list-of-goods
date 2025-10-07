const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to load goods: ${response.status}`);
    }

    const goods = await response.json();

    // Перевіряємо, що це масив
    if (!Array.isArray(goods)) {
      throw new Error('Invalid goods data');
    }

    return goods;
  } catch (error) {
    throw new Error('Unable to fetch goods. Please try again later.');
  }
};

export const get5First = async () => {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
