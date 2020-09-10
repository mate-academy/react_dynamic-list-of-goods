// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const phones = await getAll();

  phones.sort((phone1, phone2) => phone1.name.localeCompare(phone2.name));

  return phones.slice(0, 5);
};

export const getRedGoods = async() => {
  const phones = await getAll();

  return phones.filter(phone => phone.color === 'red');
};
