import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(`Error fetching all goods: ${error}`);
      throw error; // прокидаємо далі помилку, щоб її можна було обробити вище
    })
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log('Fetch attempt finished');
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = [...goods].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        return nameA.localeCompare(nameB);
      });

      return sortedGoods.slice(0, 5);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(`Error fetching first 5 goods: ${error}`);
      throw error; // прокидаємо далі помилку, щоб її можна було обробити вищеs
    })
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log('Fetch 5 first attempt finished');
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(`Error fetching red goods: ${error}`);
      throw error; // прокидаємо далі помилку, щоб її можна було обробити вище
    })
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log('Fetch red goods attempt finished');
    });
};
