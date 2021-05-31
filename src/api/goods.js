// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// eslint-disable-next-line
const request = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status}: ${response.statusText}`);
    });
};

export const getAll = () => request(API_URL);

export const get5First = async() => {
  const allItems = await getAll();

  return allItems.filter((item, index) => index < 5);
};

export const getRed = async() => {
  const allItems = await getAll();

  return allItems.filter((item, index) => item.color.includes('red'));
};
