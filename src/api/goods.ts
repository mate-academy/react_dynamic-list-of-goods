const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods';
const url = `${API_URL}/goods.json`;

export async function getAll() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return [...data];
  } catch (err) {
    alert('Something wrong');
    throw new Error('Something wrong');
  }
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((a, b) => a.name.localeCompare(b.name)))
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((el) => el.color === 'red'));
};
