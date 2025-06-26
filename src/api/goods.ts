import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

/**
 * Fetches all goods from the API.
 * @returns {Promise<Good[]>} A promise that resolves to an array of all goods.
 */
export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json(); // Parse the JSON response
    })
    .catch(error => {
      throw error; // Re-throw the error for the calling component to handle
    });
}

/**
 * Fetches all goods, sorts them by name, and returns the first 5.
 * @returns {Promise<Good[]>} A promise that resolves to an array of the first 5 goods.
 */
export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => {
      // Sort the goods alphabetically by name
      const sortedGoods = [...goods].sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      return sortedGoods.slice(0, 5);
    })
    .catch(error => {
      throw error; // Re-throw the error
    });
};

/**
 * Fetches all goods and filters them to return only the red ones.
 * @returns {Promise<Good[]>} A promise that resolves to an array of red goods.
 */
export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => {
      // Filter the goods to include only those where the color is 'red' (case-insensitive)
      return goods.filter(good => good.color.toLowerCase() === 'red');
    })
    .catch(error => {
      throw error; // Re-throw the error
    });
};
